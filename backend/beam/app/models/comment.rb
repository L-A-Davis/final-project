class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :model

  validates :model_id, :user_id, :content, presence: true
  validates :content, length: { maximum: 255 }


end
