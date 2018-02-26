class Api::V1::BasicInfoDataController < ApplicationController


    def index
    @basic_info_data = BasicInfoDatum.all
    render json: @basic_info_data
  end

  def create
    @basic_info_datum = BasicInfoDatum.create(basic_info_datum_params)
    render json: @basic_info_datum, status: 201
  end

  def new
    @basic_info_datum = BasicInfoDatum.new
  end

  def edit
    @basic_info_datum = BasicInfoDatum.find(params[:id])
  end

  def update
    @basic_info_datum = BasicInfoDatum.find(params[:id])
    @basic_info_datum.update(basic_info_datum_params)
    @basic_info_datum.save

    render json: @basic_info_datum
  end

  def show
    @basic_info_datum = BasicInfoDatum.find(params[:id])
    render json: @basic_info_datum, status: 200
  end

  def destroy
    @basic_info_datum = BasicInfoDatum.find(params[:id])
    @basic_info_datum.destroy
    render json: {message:"BasicInfoData Deleted"}
  end

  private
    def basic_info_datum_params
      params.require(:basic_info_datum).permit(:model_id, :company, :ticker, :codename, :acquiror)
    end


end
