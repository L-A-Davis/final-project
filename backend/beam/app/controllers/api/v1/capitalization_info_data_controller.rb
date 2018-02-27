class Api::V1::CapitalizationInfoDataController < ApplicationController


      def index
      @capitalization_info_data = CapitalizationInfoDatum.all
      render json: @capitalization_info_data
    end

    def create
      @capitalization_info_datum = CapitalizationInfoDatum.create(capitalization_info_datum_params)
      render json: @capitalization_info_datum, status: 201
    end

    def new
      @capitalization_info_datum = CapitalizationInfoDatum.new
    end

    def edit
      @capitalization_info_datum = CapitalizationInfoDatum.find(params[:id])
    end

    def update
      @capitalization_info_datum = CapitalizationInfoDatum.find(params[:id])
      @capitalization_info_datum.update(capitalization_info_datum_params)
      @capitalization_info_datum.save
      render json: @capitalization_info_datum
    end

    def show
      @capitalization_info_datum = CapitalizationInfoDatum.find(params[:id])
      render json: @capitalization_info_datum, status: 200
    end

    def destroy
      @capitalization_info_datum = CapitalizationInfoDatum.find(params[:id])
      @capitalization_info_datum.destroy
      render json: {message:"CapitalizationInfoData Deleted"}
    end

    private
      def capitalization_info_datum_params
        params.require(:capitalization_info_datum).permit(:model_id, :company, :item_name, :item_type, :repay, :rate, :amount)
      end


end
