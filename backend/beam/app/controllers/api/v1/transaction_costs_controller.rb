class Api::V1::TransactionCostsController < ApplicationController


    def index
    @transaction_cost_data = TransactionCost.all
    render json: @transaction_cost_data
  end

  def create
    @transaction_cost = TransactionCost.create(transaction_cost_params)
    render json: @transaction_cost, status: 201
  end

  def new
    @transaction_cost = TransactionCost.new
  end

  def edit
    @transaction_cost = TransactionCost.find(params[:id])
  end

  def update
    @transaction_cost = TransactionCost.find(params[:id])
    @transaction_cost.update(transaction_cost_params)
    @transaction_cost.save
    render json: @transaction_cost
  end

  def show
    @transaction_cost = TransactionCost.find(params[:id])
    render json: @transaction_cost, status: 200
  end

  def destroy
    @transaction_cost = TransactionCost.find(params[:id])
    @transaction_cost.destroy
    render json: {message:"TransactionCosts Deleted"}
  end

  private
    def transaction_cost_params
      params.require(:offer_info_data).permit(:model_id, :name, :input_type, :data_input)
    end


end
