class MakeUserChannelTableIdComboUnique < ActiveRecord::Migration[5.2]
  def change
    add_index :user_channels, [:user_id, :channel_id], :unique => true
  end
end
