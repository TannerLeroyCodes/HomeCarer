class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :accepted, :declined, :type_of_care, :notes
  has_one :user
  has_one :provider
end
