#TODO: refactor to get back a list of all channels associated with the user (user selector) - but only the names+ids of channels
json.user do
  json.partial! 'api/users/user', user: @user
end

json.channel do
  json.partial! 'api/channels/channel', channel: @channel
end

# json.user_channels do
#   @user_channels.each do |user_channel|
#     json.set! user_channel.id do
#       json.partial! 'api/user_channels/user_channel', user_channel: user_channel
#     end
#   end
# end
json.user_channel do
  json.partial! 'api/user_channels/user_channel', user_channel: @user_channel
end
