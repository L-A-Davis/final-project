class CreateTransactionCosts < ActiveRecord::Migration[5.1]
  def change
    create_table :transaction_costs do |t|
      t.references :model, foreign_key: true
      t.string :name
      t.string :input_type
      t.float :data_input

      t.timestamps
    end
  end
end
