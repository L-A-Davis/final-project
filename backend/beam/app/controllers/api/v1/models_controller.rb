class Api::V1::ModelsController < ApplicationController

  def index
  @models = Model.all
  render json: @models
end

def create
  @model = Model.create(model_params)
  render json: @model, status: 201
end

def new
  @model = Model.new
end

def edit
  @model = Model.find(params[:id])
end

def update
  @model = Model.find(params[:id])
  @model.update(model_params)
  @model.save
  render json: @model
end

def show
  @model = Model.find(params[:id])
  render json: @model, status: 200
end

def destroy
  @model = Model.find(params[:id])
  @model.destroy
  render json: {message:"Model Deleted"}
end

private
  def model_params
    params.require(:model).permit(:name, :data, :project_id)
  end




end
