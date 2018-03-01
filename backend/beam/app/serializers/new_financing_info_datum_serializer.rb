class NewFinancingInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_type, :amount, :rate, :plug
  has_one :model
end
