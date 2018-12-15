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

exercise = User.create!(email: 'recruiter@awesomecompanycompetition.com', username: 'BetterThanAwesomeCompany', password: '123456', profile_pic_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/ExerciseSloth.jpg')
exercise_direct = Channel.create!(name: exercise.username, direct_message_channel: true, author_id: exercise.id)
UserChannel.create!(user_id: exercise.id, channel_id: exercise_direct.id)
UserChannel.create!(user_id: exercise.id, channel_id: general.id)

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

exercise_dirk = Channel.create!(name: exercise.username + ', ' + dirk.username, direct_message_channel: true)
UserChannel.create!(user_id: dirk.id, channel_id: exercise_dirk.id)
UserChannel.create!(user_id: exercise.id, channel_id: exercise_dirk.id)

exercise_jing = Channel.create!(name: exercise.username + ', ' + jing.username, direct_message_channel: true)
UserChannel.create!(user_id: jing.id, channel_id: exercise_jing.id)
UserChannel.create!(user_id: exercise.id, channel_id: exercise_jing.id)

exercise_recruiter = Channel.create!(name: exercise.username + ', ' + recruiter.username, direct_message_channel: true)
UserChannel.create!(user_id: recruiter.id, channel_id: exercise_recruiter.id)
UserChannel.create!(user_id: exercise.id, channel_id: exercise_recruiter.id) 

exercise_goose = Channel.create!(name: exercise.username + ', ' + goose.username, direct_message_channel: true)
UserChannel.create!(user_id: goose.id, channel_id: exercise_goose.id)
UserChannel.create!(user_id: exercise.id, channel_id: exercise_goose.id)

exercise_andy = Channel.create!(name: exercise.username + ', ' + andy.username, direct_message_channel: true)
UserChannel.create!(user_id: andy.id, channel_id: exercise_andy.id)
UserChannel.create!(user_id: exercise.id, channel_id: exercise_andy.id)

slothPics = Channel.create!(name: 'Pictures of Sloths', direct_message_channel: false)
UserChannel.create!(user_id: recruiter.id, channel_id: slothPics.id)
UserChannel.create!(user_id: goose.id, channel_id: slothPics.id)
UserChannel.create!(user_id: jing.id, channel_id: slothPics.id)
UserChannel.create!(user_id: andy.id, channel_id: slothPics.id)

transhumanism = Channel.create!(name: "Transhumanism", direct_message_channel: false)
UserChannel.create!(user_id: recruiter.id, channel_id: transhumanism.id)
UserChannel.create!(user_id: goose.id, channel_id: transhumanism.id)
UserChannel.create!(user_id: dirk.id, channel_id: transhumanism.id)

bci = Channel.create!(name: "Brain-Computer-Interfacing", direct_message_channel: false)
UserChannel.create!(user_id: recruiter.id, channel_id: bci.id)
UserChannel.create!(user_id: goose.id, channel_id: bci.id)
UserChannel.create!(user_id: dirk.id, channel_id: bci.id)

# GENERAL
realTimeMsg = ChatMessage.new(author_id: dirk.id, channel_id: general.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/RealTimeMessagingShowcase.gif')
realTimeMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/RealTimeMessagingShowcase.gif')), filename: 'RealTimeMessagingShowcase.gif', content_type: 'image/gif')
realTimeMsg.save!

ChatMessage.create!(content: 'Hi there! Welcome to my site!', author_id: dirk.id, channel_id: general.id)
ChatMessage.create!(content: 'To check out the live chat and live image sharing in action open a new incognito tab and log in with recruiter@awesomecompanycompetition.com, password: 123456', author_id: dirk.id, channel_id: general.id)
ChatMessage.create!(content: 'Have fun pretending to talk to a Sloth version of your competition (⊙ω⊙)', author_id: dirk.id, channel_id: general.id)
ChatMessage.create!(content: 'Sloth utilizes ActionCable\'s underlying websockets to establish two-way communication between server and client chat, allowing for both the site\'s live chat and live image sharing.', author_id: dirk.id, channel_id: general.id)
ChatMessage.create!(content: 'You will also notice the usual suspects of creating and joining channels (public or private) are fully functional. Note however that I decided not to differentiate between "direct message channels" and "private channels". If you think about it they are functionally equivalent and as a daily Slack user differentiating direct message channels from private channels means I can have a private channel hidden among a whole list of public channels. This irks me so... I changed it :P', author_id: dirk.id, channel_id: general.id)

# joincreateprivateMsg = ChatMessage.new(author_id: dirk.id, channel_id: general.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/RealTimeMessagingShowcase.gif')
# joincreateprivateMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/RealTimeMessagingShowcase.gif')), filename: 'RealTimeMessagingShowcase.gif', content_type: 'image/gif')
# joincreateprivateMsg.save!

ChatMessage.create!(content: 'And finally a little hidden feature. I always wished you could easily merge channels in Slack so here I\'ve implemented it! (⊙ω⊙)', author_id: dirk.id, channel_id: general.id)
ChatMessage.create!(content: 'Use the drag icon on a selected channel and drag it to overlap with the channel you want to merge with. Protip: open the gif below in a new tab to see how it\'s done.', author_id: dirk.id, channel_id: general.id)

mergeMsg = ChatMessage.new(author_id: dirk.id, channel_id: general.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/MergeShowcase.gif')
mergeMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/MergeShowcase.gif')), filename: 'MergeShowcase.gif', content_type: 'image/gif')
mergeMsg.save!

ChatMessage.create!(content: 'Enjoy your stay!', author_id: dirk.id, channel_id: general.id)
#

spaceSlothMsg = ChatMessage.new(author_id: dirk.id, channel_id: transhumanism.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SpaceSloth.jpg')
spaceSlothMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/SpaceSloth.jpg')), filename: 'SpaceSloth.jpg', content_type: 'image/jpg')
spaceSlothMsg.save!

ChatMessage.create!(content: 'Technocracy?', author_id: goose.id, channel_id: transhumanism.id)
ChatMessage.create!(content: 'Sure, why not', author_id: dirk.id, channel_id: transhumanism.id)

ChatMessage.create!(content: 'Do you think a brain in a cultured neuronal network feels pain?', author_id: dirk.id, channel_id: bci.id)
ChatMessage.create!(content: 'Maybe', author_id: goose.id, channel_id: bci.id)

ChatMessage.create!(content: 'That feeling when the CSS on my Facebook clone aligns correctly', author_id: jing.id, channel_id: slothPics.id)
smugSlothMsg = ChatMessage.new(author_id: jing.id, channel_id: slothPics.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SmugSloth.jpg')
smugSlothMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/SmugSloth.jpg')), filename: 'SmugSloth.jpg', content_type: 'image/jpg')
smugSlothMsg.save!

beachSlothMsg = ChatMessage.new(author_id: andy.id, channel_id: slothPics.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/FamilyOnBeachSloth.jpg')
beachSlothMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/FamilyOnBeachSloth.jpg')), filename: 'FamilyOnBeachSloth.jpg', content_type: 'image/jpg')
beachSlothMsg.save!

sidMsg = ChatMessage.new(author_id: andy.id, channel_id: slothPics.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/SidSloth.gif')
sidMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/SidSloth.gif')), filename: 'SidSloth.gif', content_type: 'image/gif')
sidMsg.save!

noMsg = ChatMessage.new(author_id: goose.id, channel_id: bci.id, image_url: 'https://s3-us-west-1.amazonaws.com/app-academy-sloth-seed/NoSloth.gif')
noMsg.photo.attach(io: File.open(Rails.root.join('app/assets/images/NoSloth.gif')), filename: 'NoSloth.gif', content_type: 'image/gif')
noMsg.save!
ChatMessage.create!(content: 'lol', author_id: dirk.id, channel_id: bci.id)
ChatMessage.create!(content: 'Btw, should we merge this channel with #Technocracy? Merging will maintain ordering and we can set the new merged channel to private if we like', author_id: dirk.id, channel_id: bci.id)
ChatMessage.create!(content: 'We have enough overlap I agree but transhumanism and brain-computer-interfacing are clearly different though...', author_id: goose.id, channel_id: bci.id)
ChatMessage.create!(content: 'merging does not delete the old channels, it creates a new with copies from both channels we merged with so we can merge and decide to delete either or both channels original channels later if it works out', author_id: dirk.id, channel_id: bci.id)

ChatMessage.create!(content: 'So, since we made this channel first the above messages will come first in the new merged channel but this message will come later since I am writing this after our conversation in #Brain-Computer-Interfacing. Correct?', author_id: goose.id, channel_id: transhumanism.id)
ChatMessage.create!(content: 'Yup!', author_id: dirk.id, channel_id: transhumanism.id)
