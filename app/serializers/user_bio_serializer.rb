class UserBioSerializer < ActiveModel::Serializer
  attributes :id, :location, :description
  has_one :user_id
end
