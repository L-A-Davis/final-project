class ModelSerializer < ActiveModel::Serializer
  attributes :id, :name, :data
  has_one :project
end
