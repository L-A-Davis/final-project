class SynergiesInfoDatumSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :input_type, :input_amount
  has_one :model
end
