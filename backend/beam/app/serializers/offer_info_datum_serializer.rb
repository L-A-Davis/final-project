class OfferInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :offer_type, :offer_metric, :percentage_stock
  has_one :model
end
