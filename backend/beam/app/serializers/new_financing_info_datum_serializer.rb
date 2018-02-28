class NewFinancingInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_type, :amount, :rate
  has_one :model
end
