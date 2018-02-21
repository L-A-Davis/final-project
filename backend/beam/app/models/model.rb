class Model < ApplicationRecord
  belongs_to :project
  has_many :comments, dependent: :destroy

  validates :project_id, :name, :data, presence: true

end
