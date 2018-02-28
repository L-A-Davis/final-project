class Model < ApplicationRecord
  belongs_to :project
  has_many :comments, dependent: :destroy
  has_many :transaction_cost
  has_many :offer_info_datum
  has_many :equity_info_datum
  has_many :capitalization_info_datum
  has_many :basic_info_datum
  has_many :cash_flow_info_datum
  has_many :new_financing_info_datum
  has_many :synergies_info_datum

  validates :project_id, :name, :model_type, presence: true
  validates :model_type, inclusion: { in: %w(prelim_merger fairness) }
end
