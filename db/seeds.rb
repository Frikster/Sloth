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

recruiter = User.create!(email: 'recruiter@awesomecompany.com', username: 'Recruity Cruiter', password: '123456', profile_pic_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/RecruiterSloth.jpg')
recruiter_direct = Channel.create!(name: recruiter.username, direct_message_channel: true, author_id: recruiter.id)
UserChannel.create!(user_id: recruiter.id, channel_id: recruiter_direct.id)
UserChannel.create!(user_id: recruiter.id, channel_id: general.id)

andy = User.create!(email: 'andyiscoming@example.com', username: 'Andy Wynkoop', password: '123456', profile_pic_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/AndySloth.jpg')
andy_direct = Channel.create!(name: andy.username, direct_message_channel: true, author_id: andy.id)
UserChannel.create!(user_id: andy.id, channel_id: andy_direct.id)
UserChannel.create!(user_id: andy.id, channel_id: general.id)

dirk = User.create!(email: 'you@example.com', username:'Dirk Haupt (Site Creator)', password: '123456', profile_pic_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/DirkSloth.jpg') 
dirk_direct = Channel.create!(name: dirk.username, direct_message_channel: true, author_id: dirk.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_direct.id)
UserChannel.create!(user_id: dirk.id, channel_id: general.id)

dirk_andy = Channel.create!(name: dirk.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: dirk_andy.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_andy.id)

firstChat = ChatMessage.new(author_id: dirk.id, channel_id: general.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SlackSloth.jpg')
firstChat.photo.attach(io: File.open(Rails.root.join('app/assets/images/DirkSloth.jpg')), filename: 'DirkSloth.jpg', content_type: 'image/jpg')
firstChat.save!

# ChatMessage.create!(author_id: dirk.id, channel_id: general.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SlackSloth.jpg')
