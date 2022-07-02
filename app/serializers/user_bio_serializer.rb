class UserBioSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :patient_age, :patient_description
  has_one :user_id
end
