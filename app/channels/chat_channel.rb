# app/channels/chat_channel.rb
class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_channel'
    # @line = Line.find_by(id: params[:room])
    # stream_for @line
    # TODO: https://medium.com/@wbdana/integrating-action-cable-with-react-the-hacky-way-240db6dca8
  end

  def unsubscribed; end

  # def received(data)
  #   @channel = ChatChannel.find(data.channel_id)
  #   ChatMessage.broadcast_to(@channel, {channel: @channel, users:
  #   @channel.waiting_users})
  #   debugger
  # end

  def create(opts)
    chat = ChatMessage.create(
      content: opts.fetch('content'),
      author_id: opts.fetch('author_id'),
      channel_id: opts.fetch('channel_id'),
    )
    # debugger
    # url = opts.fetch('image_url')
    # chat.photo.attach(io: file, filename: file.name) //TODO: How to attatch url image?
    # debugger
  end
end
