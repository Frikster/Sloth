class ChatMessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_channel',
                 id: chat_message.id,
                 created_at: chat_message.created_at.strftime('%H:%M'),
                 content: chat_message.content,
                 author_id: chat_message.author_id,
                 channel_id: chat_message.channel_id)
  end
end
