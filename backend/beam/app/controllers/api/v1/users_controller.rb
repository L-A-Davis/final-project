class Api::V1::UsersController < ApplicationController

  # skip_before_action :authorized, only: [:new, :create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 201
    else
      render json: {message:"Error, User not saved"}
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    @user.save
    render json: @user
  end


  def following
    @following = User.find(params[:id]).following
  end

  def followers
    @followers = User.find(params[:id]).followers
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :email, :password, :password_confirmation, :company_id, :phone, :address)
  end

end
