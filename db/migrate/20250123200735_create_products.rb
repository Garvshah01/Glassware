class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :slug, null: false
      t.boolean :enabled, default: false, null: false

      t.timestamps
    end
  end
end
