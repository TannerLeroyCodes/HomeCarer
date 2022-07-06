class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :notifications, :full_name

  has_one :user_bio
  has_many :appointments
end
