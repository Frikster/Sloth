class AddImageUrlToChatMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :chat_messages, :image_url, :string
  end
end
