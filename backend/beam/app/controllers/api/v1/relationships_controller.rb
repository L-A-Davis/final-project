class Api::V1::RelationshipsController < ApplicationController

  def index
    @relationships= Relationship.all
    render json: @relationships
  end

  def create
    @user = User.find(params[:followed_id])
    current_user.follow(@user)
    render json: @user, status: 201

  end

  def destroy
    @user = Relationship.find(params[:id]).followed
    current_user.unfollow(@user)
    render json: {message:"Friendship Removed"}
  end


end
