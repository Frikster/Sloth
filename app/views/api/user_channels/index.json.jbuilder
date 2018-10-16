@user_channels.each do |user_channel|
  json.set! user_channel.id do
    json.partial! 'user_channel', user_channel: user_channel
  end
end
