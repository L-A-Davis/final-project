class CreateBasicInfoData < ActiveRecord::Migration[5.1]
  def change
    create_table :basic_info_data do |t|
      t.references :model, foreign_key: true
      t.string :company
      t.string :ticker
      t.string :codename
      t.boolean :acquiror

      t.timestamps
    end
  end
end
