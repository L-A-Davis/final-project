class Api::V1::SynergiesInfoDataController < ApplicationController

      def index
      @synergies_info_data = SynergiesInfoDatum.all
      render json: @synergies_info_data
    end

    def create
      @synergies_info_datum = SynergiesInfoDatum.create(synergies_info_datum_params)
      render json: @synergies_info_datum, status: 201
    end

    def new
      @synergies_info_datum = SynergiesInfoDatum.new
    end

    def edit
      @synergies_info_datum = SynergiesInfoDatum.find(params[:id])
    end

    def update
      @synergies_info_datum = SynergiesInfoDatum.find(params[:id])
      @synergies_info_datum.update(synergies_info_datum_params)
      @synergies_info_datum.save
      render json: @synergies_info_datum
    end

    def show
      @synergies_info_datum = SynergiesInfoDatum.find(params[:id])
      render json: @synergies_info_datum, status: 200
    end

    def destroy
      @synergies_info_datum = SynergiesInfoDatum.find(params[:id])
      @synergies_info_datum.destroy
      render json: {message:"SynergiesInfoData Deleted"}
    end

    private
      def synergies_info_datum_params
        params.require(:synergies_info_datum).permit(:model_id, :item_name, :input_type, :input_amount)
      end



end
