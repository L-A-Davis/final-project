class EquityInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :company, :currentSharePrice, :shares, :dividend
  has_one :model
end
