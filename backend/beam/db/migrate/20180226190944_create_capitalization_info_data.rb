class CreateCapitalizationInfoData < ActiveRecord::Migration[5.1]
  def change
    create_table :capitalization_info_data do |t|
      t.references :model, foreign_key: true
      t.string :company
      t.string :item_name
      t.string :item_type
      t.float :amount
      t.boolean :repay
      t.float :rate

      t.timestamps
    end
  end
end
