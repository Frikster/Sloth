#TODO: refactor to get back a list of all channels associated with the user (user selector) - but only the names+ids of channels
json.user do
  json.partial! 'api/users/user', user: @user
end

json.channel do
  json.partial! 'api/channels/channel', channel: @channel
end
