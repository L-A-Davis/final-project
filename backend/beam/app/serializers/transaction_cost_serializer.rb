class TransactionCostSerializer < ActiveModel::Serializer
  attributes :id, :name, :input_type, :data_input
  has_one :model
end
