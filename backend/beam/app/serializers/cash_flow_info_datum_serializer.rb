class CashFlowInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :company, :item_name, :amount_year1, :amount_year2
  has_one :model
end
