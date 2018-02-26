class ModelSerializer < ActiveModel::Serializer
  attributes :id, :name, :data, :model_type
  has_one :project
end
