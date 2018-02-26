class BasicInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :company, :ticker, :codename, :acquiror
  has_one :model
end
