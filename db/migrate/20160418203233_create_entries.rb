class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :name
      t.text :memory
      t.text :quote
      t.text :grateful
      t.text :learned

      t.timestamps null: false
    end
  end
end
