class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :accepted, :declined, :type_of_care, :notes, :length_in_hours, :user, :provider, :start_time, :price
  has_one :user
  has_one :provider




end
