@channels.each do |channel|
  json.set! channel.id do
    json.partial! 'channel', channel: channel
  end
end
