class CreateUserChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :user_channels do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :user_channels, :user_id
    add_index :user_channels, :channel_id
  end
end
