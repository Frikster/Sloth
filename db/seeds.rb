# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Channel.delete_all
User.delete_all
UserChannel.delete_all
ChatMessage.delete_all

Channel.create!(id: 1, name: 'General', direct_message_channel: false)

andy = User.create!(email: 'andyiscoming@example.com', username: 'Andy Wynkoop', password: '123456')
andy_direct = Channel.create!(name: andy.username, direct_message_channel: true, author_id: andy.id)
UserChannel.create!(user_id: andy.id, channel_id: andy_direct.id)
UserChannel.create!(user_id: andy.id, channel_id: 1)

dirk = User.create!(email: 'you@example.com', username:'Dirk', password: '123456')
dirk_direct = Channel.create!(name: dirk.username, direct_message_channel: true, author_id: dirk.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_direct.id)
UserChannel.create!(user_id: dirk.id, channel_id: 1)

dirk_andy = Channel.create!(name: dirk.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: dirk_andy.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_andy.id)
