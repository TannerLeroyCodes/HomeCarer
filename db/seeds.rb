require 'faker'

puts "Beginning to seed..."

puts "Starting to seed Users..."

tanner =  User.create(first_name: "tanner", last_name: "leroy", email: "tanner@tleroy.com", password: "tpass")
u2  = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , email: Faker::Internet.email, password: "password")
u3  = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , email: Faker::Internet.email, password: "password")
u4  = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , email: Faker::Internet.email, password: "password")
u5  = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , email: Faker::Internet.email, password: "password")
u6  = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , email: Faker::Internet.email, password: "password")

puts "Starting to seed User Bios..."

ub1 = UserBio.create(user_id: tanner.id, location: Faker::Address.state, description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from Alzheimer's. Looking for someone to keep on eye on the patient and assist with preparing meals" )
ub2 = UserBio.create(user_id: u2.id, location: Faker::Address.state, description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from chromic joint pain. Looking for someone to keep on eye on the patient and assist with necessary as they are not very mobile." )
ub3 = UserBio.create(user_id: u3.id, location: Faker::Address.state, description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from chromic joint pain. Looking for someone to keep on eye on the patient and assist with necessary as they are not very mobile." )
ub4 = UserBio.create(user_id: u4.id, location: Faker::Address.state, description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from chromic joint pain. Looking for someone to keep on eye on the patient and assist with necessary as they are not very mobile." )
ub5 = UserBio.create(user_id: u5.id, location: Faker::Address.state, description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from chromic joint pain. Looking for someone to keep on eye on the patient and assist with necessary as they are not very mobile." )
ub6 = UserBio.create(user_id: u6.id, location: Faker::Address.state, description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from chromic joint pain. Looking for someone to keep on eye on the patient and assist with necessary as they are not very mobile." )

puts "Starting to seed Providers..."

p1 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: "test@gmail.com", password: "testpass")  
p2 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p3 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p4 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p5 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p6 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")   
p7 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  

puts "Starting to seed Providers Bios..."

pb1 = ProviderBio.create(provider_id: p1.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29.99..79.99), description: "I really enjoy providing support to families with their loved ones!" )
pb2 = ProviderBio.create(provider_id: p2.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29.99..79.99), description: "I really enjoy providing support to families with their loved ones!" )
pb3 = ProviderBio.create(provider_id: p3.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29.99..79.99), description: "I really enjoy providing support to families with their loved ones!" )
pb4 = ProviderBio.create(provider_id: p4.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29.99..79.99), description: "I really enjoy providing support to families with their loved ones!" )
pb5 = ProviderBio.create(provider_id: p5.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29.99..79.99), description: "I really enjoy providing support to families with their loved ones!" )
pb6 = ProviderBio.create(provider_id: p6.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29.99..79.99), description: "I really enjoy providing support to families with their loved ones!" )
pb7 = ProviderBio.create(provider_id: p7.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29.99..79.99), description: "I really enjoy providing support to families with their loved ones!" )


puts "Starting to seed Appointments..."

Appointment.create(user_id: tanner.id, provider_id: p1.id, date:Faker::Date.in_date_period(month: 2), accepted: false, declined: false, type_of_care: "Personal care", notes: "Please heatup dinner and keep on eye on Ed. Feel free to put on any movie he is easy-going", length_in_hours: rand(1..6))
Appointment.create(user_id: tanner.id, provider_id: p3.id, date:Faker::Date.in_date_period(month: 2), accepted: false, declined: false, type_of_care: "Personal care", notes: "Please heatup dinner and keep on eye on Ed. Feel free to put on any movie he is easy-going", length_in_hours: rand(1..6))
Appointment.create(user_id: tanner.id, provider_id: p4.id, date:Faker::Date.in_date_period(month: 2), accepted: false, declined: false, type_of_care: "Personal care", notes: "Please heatup dinner and keep on eye on Ed. Feel free to put on any movie he is easy-going", length_in_hours: rand(1..6))
Appointment.create(user_id: tanner.id, provider_id: p1.id, date:Faker::Date.in_date_period(month: 2), accepted: false, declined: false, type_of_care: "Personal care", notes: "Please heatup dinner and keep on eye on Ed. Feel free to put on any movie he is easy-going", length_in_hours: rand(1..6))
Appointment.create(user_id: tanner.id, provider_id: p5.id, date:Faker::Date.in_date_period(month: 2), accepted: false, declined: false, type_of_care: "Personal care", notes: "Please heatup dinner and keep on eye on Ed. Feel free to put on any movie he is easy-going", length_in_hours: rand(1..6))

puts "Finished seeding!"