class CashFlowInfoDataController < ApplicationController

    def index
    @cashflow_info_data = CashFlowInfoDatum.all
    render json: @cashflow_info_data
  end

  def create
    @cashflow_info_datum = CashFlowInfoDatum.create(cashflow_info_datum_params)
    render json: @cashflow_info_datum, status: 201
  end

  def new
    @cashflow_info_datum = CashFlowInfoDatum.new
  end

  def edit
    @cashflow_info_datum = CashFlowInfoDatum.find(params[:id])
  end

  def update
    @cashflow_info_datum = CashFlowInfoDatum.find(params[:id])
    @cashflow_info_datum.update(cashflow_info_datum_params)
    @cashflow_info_datum.save
    render json: @cashflow_info_datum
  end

  def show
    @cashflow_info_datum = CashFlowInfoDatum.find(params[:id])
    render json: @cashflow_info_datum, status: 200
  end

  def destroy
    @cashflow_info_datum = CashFlowInfoDatum.find(params[:id])
    @cashflow_info_datum.destroy
    render json: {message:"CashFlowInfoData Deleted"}
  end

  private
    def cashflow_info_datum_params
      params.require(:cashflow_info_data).permit(:model_id, :company, :item_name, :amount_year1, :amount_year2)
    end

end
