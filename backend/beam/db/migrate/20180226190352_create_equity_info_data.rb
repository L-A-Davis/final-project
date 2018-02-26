class CreateEquityInfoData < ActiveRecord::Migration[5.1]
  def change
    create_table :equity_info_data do |t|
      t.references :model, foreign_key: true
      t.string :company
      t.decimal :currentSharePrice, precision: 10, scale: 2
      t.float :shares
      t.decimal :dividend, precision: 10, scale: 2

      t.timestamps
    end
  end
end
