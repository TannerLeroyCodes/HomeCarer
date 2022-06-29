class Provider < ApplicationRecord
    has_secure_password

    has_one :provider_bio, dependent: :destroy
    has_many :appointments, dependent: :destroy
    has_many :users, through: :appointments

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true 

end
