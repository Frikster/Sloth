class RemoveUsernameConstraints < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, unique: false
    remove_index :users, :username
    change_column_null(:users, :username, true)
  end
end
