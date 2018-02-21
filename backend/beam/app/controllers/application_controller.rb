

class ApplicationController < ActionController::API

  private

  def encode_token(payload)
    JWT.encode(payload, secret, algorithm)
  end

  def login_user(email, password)
    user = User.find_by(email: email)
    if user && user.authenticate(password)
      user
    else
      raise AuthError
    end
  end

  # def authorize_user!
  #   if !current_user.present?
  #     render json: {error: 'No user id present'}
  #   end
  # end

  def current_user
    User.find_by(id: user_id_from_token(token))
  end

  def user_id_from_token(token)
    decode_token(token).first['user_id']
  end

  def decode_token(token)
    puts "request made ", token
    if (token)
      begin
        JWT.decode(token, secret, true, { algorithm: algorithm })
      rescue
        return [{}]
      end
    else
      return [{}]
    end
  end

  def token
    request.headers['Authorization']
  end

  def secret
  'placeholder'
  end

  def algorithm
    'HS256'
  end

  class AuthError < StandardError
    def initialize(msg="No user or invalid password")
      super
    end
  end

end

# alternative code for current_user
# @current_user ||= User.find_by(id: user_id_from_token(token))
# rescue in decode_token:
#   rescue JWT::DecodeError
