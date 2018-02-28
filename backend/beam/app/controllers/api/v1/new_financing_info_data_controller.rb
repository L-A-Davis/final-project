class Api::V1::NewFinancingInfoDataController < ApplicationController

  def index
  @new_financing_info_data = NewFinancingInfoDatum.all
  render json: @new_financing_info_data
end

def create
  @new_financing_info_datum = NewFinancingInfoDatum.create(new_financing_info_datum_params)
  render json: @new_financing_info_datum, status: 201
end

def new
  @new_financing_info_datum = NewFinancingInfoDatum.new
end

def edit
  @new_financing_info_datum = NewFinancingInfoDatum.find(params[:id])
end

def update
  @new_financing_info_datum = NewFinancingInfoDatum.find(params[:id])
  @new_financing_info_datum.update(new_financing_info_datum_params)
  @new_financing_info_datum.save
  render json: @new_financing_info_datum
end

def show
  @new_financing_info_datum = NewFinancingInfoDatum.find(params[:id])
  render json: @new_financing_info_datum, status: 200
end

def destroy
  @new_financing_info_datum = NewFinancingInfoDatum.find(params[:id])
  @new_financing_info_datum.destroy
  render json: {message:"NewFinancingInfoData Deleted"}
end

private
  def new_financing_info_datum_params
    params.require(:new_financing_info_datum).permit(:model_id, :item_name, :item_type, :amount, :rate)
  end


end
