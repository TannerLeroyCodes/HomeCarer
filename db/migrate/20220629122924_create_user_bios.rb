class CreateUserBios < ActiveRecord::Migration[7.0]
  def change
    create_table :user_bios do |t|
      t.references :user, null: false, foreign_key: true
      t.string :location
      t.string :description
      t.integer :patient_age
      t.string :patient_description

      t.timestamps
    end
  end
end
