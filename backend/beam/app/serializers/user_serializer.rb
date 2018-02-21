class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :phone, :address
  has_one :company
end
