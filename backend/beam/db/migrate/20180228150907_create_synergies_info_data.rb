class CreateSynergiesInfoData < ActiveRecord::Migration[5.1]
  def change
    create_table :synergies_info_data do |t|
      t.references :model, foreign_key: true
      t.string :item_name
      t.string :input_type
      t.float :input_amount

      t.timestamps
    end
  end
end
