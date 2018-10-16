#TODO: refactor to get back a list of all channels associated with the user (user selector) - but only the names+ids of channels
json.user do
  json.partial! 'api/users/user_channel', user_channel: @user_channel
end
