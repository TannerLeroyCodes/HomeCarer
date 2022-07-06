class UserBio < ApplicationRecord
  belongs_to :user

  validates :location, length: {maximum: 80}
  validates :description, length: {maximum: 500}
  validates :patient_age, numericality: {greater_than: 1, less_than: 120}
  validates :patient_description, length: {maximum: 500}
end
