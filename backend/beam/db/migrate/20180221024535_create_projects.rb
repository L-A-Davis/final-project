class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :deal_type
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
