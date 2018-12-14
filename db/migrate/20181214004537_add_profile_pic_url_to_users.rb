class AddProfilePicUrlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_pic_url, :string
  end
end
