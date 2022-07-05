class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :accepted, :declined, :type_of_care, :notes, :length_in_hours, :provider
  has_one :user
  has_one :provider
end
