class Api::V1::CompaniesController < ApplicationController

  def index
  @companies = Company.all
  render json: @companies
end

def create
  @company = Company.create(company_params)
  render json: @company, status: 201
end

def new
  @company = Company.new
end

def edit
  @company = Company.find(params[:id])
end

def update
  @company = Company.find(params[:id])
  @company.update(company_params)
  @company.save
  render json: @company
end

def show
  @company = Company.find(params[:id])
  render json: @company, status: 200
end

def destroy
  @company = Company.find(params[:id])
  @company.destroy
  render json: {message:"Company Deleted"}
end

private
  def company_params
    params.require(:company).permit(:name)
  end


end
