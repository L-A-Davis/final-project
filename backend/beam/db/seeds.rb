# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

2.times do
  Company.create(
    name: Faker::Company.name
  )
end

User.create(user_name: "Lindsay Davis", email: "ldavis@gmail.com", password: '123456', password_confirmation: '123456', company_id: 1,
phone: Faker::PhoneNumber.cell_phone,
address: Faker::Address.street_address)

User.create(user_name: "George Washington", email: "gwashington@gmail.com", password: '123456', password_confirmation: '123456', company_id: 1,
phone: Faker::PhoneNumber.cell_phone,
address: Faker::Address.street_address)

User.create(user_name: "Tom Jefferson", email: "tjefferson@gmail.com", password: '123456', password_confirmation: '123456', company_id: 1,
phone: Faker::PhoneNumber.cell_phone,
address: Faker::Address.street_address)

User.create(user_name: "John Adams", email: "jadams@gmail.com", password: '123456', password_confirmation: '123456', company_id: 2,
phone: Faker::PhoneNumber.cell_phone,
address: Faker::Address.street_address)

User.create(user_name: "Patrick Henry", email: "phenry@gmail.com", password: '123456', password_confirmation: '123456', company_id: 2,
phone: Faker::PhoneNumber.cell_phone,
address: Faker::Address.street_address)

Project.create(name: "Potomac", deal_type: "merger", user_id: 1)
Project.create(name: "Valley Forge", deal_type: "merger", user_id: 2)
Project.create(name: "Skyscraper", deal_type: "merger", user_id: 1)

Model.create(name: "Potomac 2.26.18 Model draft", project_id: 1, data: "{}", model_type: "prelim_merger")
Model.create(name: "Valley Forge First Model", project_id: 2, data: "{}", model_type: "prelim_merger")
Model.create(name: "Potomac Redo 2.26", project_id: 1, data: "{}", model_type: "prelim_merger")


Relationship.create(follower_id: 1, followed_id: 2)
Relationship.create(follower_id: 1, followed_id: 3)
Relationship.create(follower_id: 1, followed_id: 4)
Relationship.create(follower_id: 2, followed_id: 1)
Relationship.create(follower_id: 2, followed_id: 3)
