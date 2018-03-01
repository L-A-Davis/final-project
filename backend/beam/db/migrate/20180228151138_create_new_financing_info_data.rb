class CreateNewFinancingInfoData < ActiveRecord::Migration[5.1]
  def change
    create_table :new_financing_info_data do |t|
      t.references :model, foreign_key: true
      t.string :item_name
      t.string :item_type
      t.float :amount
      t.float :rate
      t.boolean :plug

      t.timestamps
    end
  end
end
