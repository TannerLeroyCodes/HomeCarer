class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :provider

validates :date, presence: true
validates :type_of_care, presence: true
validates :length_in_hours , presence: true, numericality: {only_integer: true}
validates :notes, length: {maximum: 600}


def total
  self.provider.provider_bio.rate * self.length_in_hours
end 



end
