class CreateModels < ActiveRecord::Migration[5.1]
  def change
    create_table :models do |t|
      t.string :name
      t.references :project, foreign_key: true
      t.string :data

      t.timestamps
    end
  end
end
