class Api::V1::OfferInfoDataController < ApplicationController

    def index
    @offer_info_data = OfferInfoDatum.all
    render json: @offer_info_data
  end

  def create
    @offer_info_datum = OfferInfoDatum.create(offer_info_datum_params)
    render json: @offer_info_datum, status: 201
  end

  def new
    @offer_info_datum = OfferInfoDatum.new
  end

  def edit
    @offer_info_datum = OfferInfoDatum.find(params[:id])
  end

  def update
    @offer_info_datum = OfferInfoDatum.find(params[:id])
    @offer_info_datum.update(offer_info_datum_params)
    @offer_info_datum.save
    render json: @offer_info_datum
  end

  def show
    @offer_info_datum = OfferInfoDatum.find(params[:id])
    render json: @offer_info_datum, status: 200
  end

  def destroy
    @offer_info_datum = OfferInfoDatum.find(params[:id])
    @offer_info_datum.destroy
    render json: {message:"OfferInfoData Deleted"}
  end

  private
    def offer_info_datum_params
      params.require(:offer_info_datum).permit(:model_id, :offer_type, :offer_metric, :percentage_stock)
    end


end
