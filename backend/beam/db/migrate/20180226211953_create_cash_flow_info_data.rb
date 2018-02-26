class CreateCashFlowInfoData < ActiveRecord::Migration[5.1]
  def change
    create_table :cash_flow_info_data do |t|
      t.references :model, foreign_key: true
      t.string :company
      t.string :item_name
      t.float :amount_year1
      t.float :amount_year2

      t.timestamps
    end
  end
end
