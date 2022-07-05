class ProviderBio < ApplicationRecord
  belongs_to :provider

  validates :location, length: {maximum: 80}
  validates :description, length: {maximum: 400}
  validates :rate, numericality: true
 
end
