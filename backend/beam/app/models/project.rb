class Project < ApplicationRecord
  belongs_to :user
  has_many :models, dependent: :destroy
  has_many :comments, through: :models

  validates :user_id, :name, :deal_type, presence: true
  validates :deal_type, inclusion: { in: %w(prelim_merger fairness)}

end
