class AllowAuthorIdNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:channels, :author_id, true)
  end
end
