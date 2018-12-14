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

andy = User.create!(email: 'andyiscoming@example.com', username: 'Andy Wynkoop', password: '123456', profile_pic_url: 'https://s3.us-west-1.amazonaws.com/app-academy-sloth-seed/AndySloth.jpg?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDAdNwrEFK458tTwmKyK4A%2FQLt%2FD%2BVW4wUBw%2FVEiTWSdU0FAnW9y2eODXS%2FRGC2ApkC97qZmj38MySNpqzQXNQ2dVFkce73AnKZnLntmnpyFAWDsAGinwZ2c3hVMYlH5Xyyht6SK79FazIqTvPU5ahwNFAImXB3ktvD7VYY%2Bc3%2BIJAWFyVMQv%2BF6qyZ5IjMnAK1jv01wdQDyY%2F0xaDVnc2ejEGx8ipmaiIqQYpWvFV8X0TqJ6sanGBYePizbM9c7TCSq5rDH6XyyRFZnrbxeNT3WezeqtIRAm6T1sl%2Bez9HFobb9z8OX7hUds40lVqKLzxSH012Lpby8%2BCd4iF0avINnkeuIxzCRu12KWsYu38qxZZvwloMR6JcApIRuq8q%2BynDWRESRcnErrzZdiajaWGACpyEOq9H7nlm%2F4Ckw8XH9iI6hQk1VJ%2Bp%2FghxOE2ePgTRLXOgHxlEqGSQ3siOVuHzFAvHNHgGSlVUQ3HXapmxIclzReeiS4BlLj41OJLIJHcR2i8ZdZWQt0YSqtXna1p7sqdPh9ifyJAtxPIUtE9MPr2tpjlce5x6ujJNxQOY47lGh5lDsCzWFlkUnnOCVIYIxsMMphzGb8KLjHzOAF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20181214T033256Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZTK7FDAXKBBADTWO%2F20181214%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=c169520fa99b6677f97bab66d8d21cff4a9cb6723d7b84593df1749412009ae1')
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
