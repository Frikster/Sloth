json.message do
  json.partial! 'api/messages/message', message: @message
end