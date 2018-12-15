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

dirk = User.create!(email: 'dirk@example.com', username:'Dirk Haupt (Site Creator)', password: '123456', profile_pic_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SteampunkSloth.jpg') 
dirk_direct = Channel.create!(name: dirk.username, direct_message_channel: true, author_id: dirk.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_direct.id)
UserChannel.create!(user_id: dirk.id, channel_id: general.id)

goose = User.create!(email: 'goose@goose.com', username:'AJ Goose', password: '123456', profile_pic_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/GooseSloth.jpg') 
goose_direct = Channel.create!(name: goose.username, direct_message_channel: true, author_id: goose.id)
UserChannel.create!(user_id: goose.id, channel_id: goose_direct.id)
UserChannel.create!(user_id: goose.id, channel_id: general.id)

jing = User.create!(email: 'jing@jing.com', username:'Jingna Li', password: '123456', profile_pic_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/JingSloth.jpg') 
jing_direct = Channel.create!(name: jing.username, direct_message_channel: true, author_id: jing.id)
UserChannel.create!(user_id: jing.id, channel_id: jing_direct.id)
UserChannel.create!(user_id: jing.id, channel_id: general.id)

recruiter_andy = Channel.create!(name: recruiter.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: recruiter_andy.id)
UserChannel.create!(user_id: recruiter.id, channel_id: recruiter_andy.id)

recruiter_dirk = Channel.create!(name: dirk.username + ', ' + recruiter.username, direct_message_channel: true)
UserChannel.create!(user_id: recruiter.id, channel_id: recruiter_dirk.id)
UserChannel.create!(user_id: dirk.id, channel_id: recruiter_dirk.id)

recruiter_goose = Channel.create!(name: recruiter.username + ', ' + goose.username, direct_message_channel: true)
UserChannel.create!(user_id: goose.id, channel_id: recruiter_goose.id)
UserChannel.create!(user_id: recruiter.id, channel_id: recruiter_goose.id)

recruiter_jing = Channel.create!(name: recruiter.username + ', ' + jing.username, direct_message_channel: true)
UserChannel.create!(user_id: jing.id, channel_id: recruiter_jing.id)
UserChannel.create!(user_id: recruiter.id, channel_id: recruiter_jing.id)

andy_dirk = Channel.create!(name: dirk.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: andy_dirk.id)
UserChannel.create!(user_id: dirk.id, channel_id: andy_dirk.id)

andy_goose = Channel.create!(name: goose.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: andy_goose.id)
UserChannel.create!(user_id: goose.id, channel_id: andy_goose.id)

andy_jing = Channel.create!(name: jing.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: andy_jing.id)
UserChannel.create!(user_id: jing.id, channel_id: andy_jing.id)

dirk_goose = Channel.create!(name: dirk.username + ', ' + goose.username, direct_message_channel: true)
UserChannel.create!(user_id: goose.id, channel_id: dirk_goose.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_goose.id)

dirk_jing = Channel.create!(name: dirk.username + ', ' + jing.username, direct_message_channel: true)
UserChannel.create!(user_id: jing.id, channel_id: dirk_jing.id)
UserChannel.create!(user_id: dirk.id, channel_id: dirk_jing.id)

goose_jing = Channel.create!(name: goose.username + ', ' + jing.username, direct_message_channel: true)
UserChannel.create!(user_id: jing.id, channel_id: goose_jing.id)
UserChannel.create!(user_id: goose.id, channel_id: goose_jing.id)

firstChat = ChatMessage.new(author_id: dirk.id, channel_id: general.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SlackSloth.jpg')
firstChat.photo.attach(io: File.open(Rails.root.join('app/assets/images/SlackSloth.jpg')), filename: 'SlackSloth.jpg', content_type: 'image/jpg')
firstChat.save!

# ChatMessage.create!(author_id: dirk.id, channel_id: general.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SlackSloth.jpg')
