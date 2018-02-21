class Api::V1::ProjectsController < ApplicationController
  def index
  @projects = Project.all
  render json: @projects
end

def create
  @project = Project.create(project_params)
  render json: @project, status: 201
end

def new
  @project = Project.new
end

def edit
  @project = Project.find(params[:id])
end

def update
  @project = Project.find(params[:id])
  @project.update(project_params)
  @project.save
  render json: @project
end

def show
  @project = Project.find(params[:id])
  render json: @project, status: 200
end

def destroy
  @project = Project.find(params[:id])
  @project.destroy
  render json: {message:"Project Deleted"}
end

private
  def project_params
    params.require(:project).permit(:name, :deal_type, :user_id)
  end

end
