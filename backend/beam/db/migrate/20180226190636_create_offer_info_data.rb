class CreateOfferInfoData < ActiveRecord::Migration[5.1]
  def change
    create_table :offer_info_data do |t|
      t.references :model, foreign_key: true
      t.string :offer_type
      t.float :offer_metric
      t.decimal :percentage_stock, precision: 10, scale: 2

      t.timestamps
    end
  end
end
