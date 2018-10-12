class ChannelNameUnique < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :name, :string, null: false
    add_index :channels, :name, unique: true
  end
end
