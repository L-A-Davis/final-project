class ModelSerializer < ActiveModel::Serializer
  attributes :id, :name, :data, :model_type
  has_one :project
  has_many :basic_info_datum
  has_many :capitalization_info_datum
  has_many :equity_info_datum
  has_many :offer_info_datum
  has_many :transaction_cost
  has_many :cash_flow_info_datum
  has_many :new_financing_info_datum
  has_many :synergies_info_datum
end
