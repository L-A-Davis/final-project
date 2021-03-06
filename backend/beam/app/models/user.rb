class User < ApplicationRecord
  belongs_to :company
  has_many :projects
  has_many :models, through: :projects
  has_many :comments

  has_many :relationships
  has_many :active_relationships, class_name:  "Relationship", foreign_key: "follower_id", dependent: :destroy
  has_many :passive_relationships, class_name:  "Relationship", foreign_key: "followed_id", dependent:  :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower

  has_secure_password
  before_save { self.email = email.downcase }
  validates :user_name, presence: true, length: { in: 5..50 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

  validates :password, presence: true, length: { in: 6..20 }, allow_nil: true

   validates :address, presence: true, length: { maximum: 100 }
   validates :phone, presence: true, length: { in: 10..16 }
  # Follows a user.
def follow(other_user)
  following << other_user
end

# Unfollows a user.
def unfollow(other_user)
  following.delete(other_user)
end

# Returns true if the current user is following the other user.
def following?(other_user)
  following.include?(other_user)
end
end
