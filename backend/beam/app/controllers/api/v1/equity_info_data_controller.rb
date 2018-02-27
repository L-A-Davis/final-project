class Api::V1::EquityInfoDataController < ApplicationController


    def index
    @equity_info_data = EquityInfoDatum.all
    render json: @equity_info_data
  end

  def create
    @equity_info_datum = EquityInfoDatum.create(equity_info_datum_params)
    render json: @equity_info_datum, status: 201
  end

  def new
    @equity_info_datum = EquityInfoDatum.new
  end

  def edit
    @equity_info_datum = EquityInfoDatum.find(params[:id])
  end

  def update
    @equity_info_datum = EquityInfoDatum.find(params[:id])
    @equity_info_datum.update(equity_info_datum_params)
    @equity_info_datum.save
    render json: @equity_info_datum
  end

  def show
    @equity_info_datum = EquityInfoDatum.find(params[:id])
    render json: @equity_info_datum, status: 200
  end

  def destroy
    @equity_info_datum = EquityInfoDatum.find(params[:id])
    @equity_info_datum.destroy
    render json: {message:"EquityInfoData Deleted"}
  end

  private
    def equity_info_datum_params
      params.require(:equity_info_datum).permit(:model_id, :company, :currentSharePrice, :shares, :dividend)
    end

end
