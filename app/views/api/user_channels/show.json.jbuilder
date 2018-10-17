#TODO: refactor to get back a list of all channels associated with the user (user selector) - but only the names+ids of channels
json.user_channel do
  json.partial! 'api/user_channels/user_channel', user_channel: @user_channel
end
