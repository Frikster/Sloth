class FinishChatMessagesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :chat_messages, :author_id, :integer, null: false
    add_column :chat_messages, :channel_id, :integer, null: false
    add_index :chat_messages, :author_id
    add_index :chat_messages, :channel_id
  end
end
