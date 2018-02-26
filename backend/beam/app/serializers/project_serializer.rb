class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :deal_type, :user
  has_many :models
end
