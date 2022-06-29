class ProviderBioSerializer < ActiveModel::Serializer
  attributes :id, :location, :certified_nurse_aide, :registered_nurse, :year_in_healthcare, :personal_care, :nursing_care, :rate, :description
  has_one :provider
end
