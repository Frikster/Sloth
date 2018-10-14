# app/channels/chat_channel.rb
class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed; end

  def create(opts)
    ChatMessage.create(
      content: opts.fetch('content'),
      author_id: opts.fetch('author_id'),
      channel_id: opts.fetch('channel_id')
    )
  end
end
