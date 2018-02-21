class Api::V1::CommentsController < ApplicationController

  def index
    @commentss = Comment.all
    render json: @commentss
  end

  def create
    @comments = Comment.create(comments_params)
    render json: @comments, status: 201
  end

  def new
    @comments = Comment.new
  end

  def edit
    @comments = Comment.find(params[:id])
  end

  def update
    @comments = Comment.find(params[:id])
    @comments.update(comments_params)
    @comments.save
    render json: @comments
  end

  def show
    @comments = Comment.find(params[:id])
    render json: @comments, status: 200
  end

  def destroy
    @comments = Comment.find(params[:id])
    @comments.destroy
    render json: {message:"Comment Deleted"}
  end

  private
    def comments_params
      params.require(:comments).permit(:user_id, :model_id, :content)
    end


end
