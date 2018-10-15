# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Channel.create!(id: 1, name: 'General', direct_message_channel: false)
andy = User.create!(email: 'andyiscoming@example.com', username: 'Andy Wynkoop', password: '123456')
Channel.create!(name: andy.username, direct_message_channel: true, author_id: andy.id)
dirk = User.create!(email: 'you@example.com', username:'Dirk', password: '123456')
Channel.create!(name: dirk.username, direct_message_channel: true, author_id: dirk.id)
