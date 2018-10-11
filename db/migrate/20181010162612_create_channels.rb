class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :author_id, null: false
      t.string :name, null: false
      t.boolean :direct_message_channel, null: false, default: false #TODO: Set default to true for when other workspaces included

      t.timestamps
    end
    add_index :channels, :author_id
  end
end
