require 'faker'

puts "Beginning to seed..."

puts "Starting to seed Users..."

tanner =  User.create(first_name: "Tanner", last_name: "Leroy", email: "tanner@tleroy.com", password: "tpass")
u2  = User.create(first_name: Faker::Name.first_name , last_name: Faker::Name.last_name , email: Faker::Internet.email, password: "password")

puts "Starting to seed User Bios..."

ub1 = UserBio.create(user_id: tanner.id, location: "New York", description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from Alzheimer's. Looking for someone to keep on eye on the patient and assist with preparing meals" )
ub2 = UserBio.create(user_id: u2.id, location: Faker::Address.state, description: "Looking for an in-home care-giver ", patient_age: rand(50..95), patient_description: "The patient suffers from chromic joint pain. Looking for someone to keep on eye on the patient and assist with necessary as they are not very mobile." )

puts "Starting to seed Providers..."

p1 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: "test@gmail.com", password: "testpass") 

# 8.times do
#     Provider.create!(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name, email: Faker::Internet.email, password: "password" )
# end 

p2 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p3 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p4 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p5 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  
p6 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")   
p7 = Provider.create(first_name: Faker::Name.unique.first_name , last_name: Faker::Name.unique.last_name , email: Faker::Internet.email, password: "password")  

puts "Starting to seed Providers Bios..."

pb1 = ProviderBio.create(provider_id: p1.id, location: ub1.location, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29..79), description: "I have always been a natural care-giver. I love being able to help!" )

# arrOfProviders = Provider.all 

# 8.time do
#     ProviderBio.create!(provider: )
# end

pb2 = ProviderBio.create(provider_id: p2.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29..79), description: "I really enjoy providing support to families with their loved ones!" )
pb3 = ProviderBio.create(provider_id: p3.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29..79), description: "I really enjoy providing support to families with their loved ones!" )
pb4 = ProviderBio.create(provider_id: p4.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29..79), description: "I really enjoy providing support to families with their loved ones!" )
pb5 = ProviderBio.create(provider_id: p5.id, location: ub1.location, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29..79), description: "I really enjoy providing support to families with their loved ones!" )
pb6 = ProviderBio.create(provider_id: p6.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29..79), description: "I really enjoy providing support to families with their loved ones!" )
pb7 = ProviderBio.create(provider_id: p7.id, location: Faker::Address.state, certified_nurse_aide: true, registered_nurse: false, year_in_healthcare: rand(3..25), personal_care: true, nursing_care: false, rate: rand(29..79), description: "I really enjoy providing support to families with their loved ones!" )


puts "Starting to seed Appointments..."

arrOfNotes = ["Please heatup dinner and keep on eye on my Father. Feel free to put on any movie he is easy-going","Please spend the day with my father. I left food in the fridge, please take my father for a walk if he's up to it.", "Please spend the day with my mother. Hangout and watch TV until I return", ]
arrOfTimes = ["11:45 AM". "2:00 PM", "4:00 PM"]

9.times do 

Appointment.create!(user: User.all.sample, provider: Provider.all.sample, date:Faker::Date.in_date_period, accepted: false, declined: false,type_of_care: "Personal care", notes: arrOfNotes.sample, length_in_hours: rand(1..6), start_time: arrOfTimes.sample)

end 


# 3.times do
# Appointment.create(user_id: tanner.id, provider_id: p1.id, date:Faker::Date.in_date_period, accepted: false, declined: false, type_of_care: "Personal care", notes: "Please heatup dinner and keep on eye on Ed. Feel free to put on any movie he is easy-going", length_in_hours: rand(1..6), start_time: "11:00 AM")
# Appointment.create(user_id: u2.id, provider_id: p3.id, date:Faker::Date.in_date_period, accepted: false, declined: false, type_of_care: "Personal care", notes: "Please spend the day with my mother. I left food in the fridge, please take my mother for a walk if she's up to it.", length_in_hours: rand(1..6), start_time: "2:00 PM")
# Appointment.create(user_id: u2.id, provider_id: p1.id, date:Faker::Date.in_date_period, accepted: false, declined: false, type_of_care: "Personal care", notes: "Please spend the day with my mother. Hangout and watch TV until I return", length_in_hours: rand(1..6), start_time: "2:00 PM")
# Appointment.create(user_id: tanner.id, provider_id: p5.id, date:Faker::Date.in_date_period, accepted: false, declined: false, type_of_care: "Personal care", notes: "Please spend the day with my mother. Hangout and watch TV until I return", length_in_hours: rand(1..6), start_time: "11:00 AM")
# end 

puts "Finished seeding!"