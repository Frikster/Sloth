# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Channel.destroy_all
User.destroy_all
UserChannel.destroy_all
ChatMessage.destroy_all

general = Channel.create!(name: 'General', direct_message_channel: false)

andy = User.create!(email: 'andyiscoming@example.com', username: 'Andy Wynkoop', password: '123456', profile_pic_url: 'https://media.giphy.com/media/3oEdv8NIigSRpCZZmw/giphy.gif')
andy_direct = Channel.create!(name: andy.username, direct_message_channel: true, author_id: andy.id)
UserChannel.create!(user_id: andy.id, channel_id: andy_direct.id)
UserChannel.create!(user_id: andy.id, channel_id: general.id)

dirk = User.create!(email: 'you@example.com', username:'Dirk', password: '123456')
dirk_direct = Channel.create!(name: dirk.username, direct_message_channel: true, author_id: dirk.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_direct.id)
UserChannel.create!(user_id: dirk.id, channel_id: general.id)

dirk_andy = Channel.create!(name: dirk.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: dirk_andy.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_andy.id)
