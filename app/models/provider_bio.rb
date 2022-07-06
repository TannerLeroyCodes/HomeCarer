class ProviderBio < ApplicationRecord
  belongs_to :provider

  validates :location, length: {maximum: 80}
  validates :description, length: {maximum: 400}
  validates :rate, numericality: {greater_than: 9, less_than: 110}
  validates :year_in_healthcare, numericality: {greater_than_or_equal_to: 1}
 
end
