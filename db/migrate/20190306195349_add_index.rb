class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :user_id
    add_index :reviews, :business_id
  end
end
