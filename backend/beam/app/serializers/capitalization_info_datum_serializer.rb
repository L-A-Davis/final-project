class CapitalizationInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :company, :item_name, :item_type, :repay, :rate
  has_one :model
end
