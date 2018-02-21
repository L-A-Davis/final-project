class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :deal_type, :user
end
