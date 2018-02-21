class Project < ApplicationRecord
  belongs_to :user
  has_many :models, dependent: :destroy
  has_many :comments, through: :models
end
