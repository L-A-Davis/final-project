class Model < ApplicationRecord
  belongs_to :project
  has_many :comments, dependent: :destroy

  validates :project_id, :name, :data, :model_type, presence: true
  validates :model_type, inclusion: { in: %w(prelim_merger fairness) }
end
