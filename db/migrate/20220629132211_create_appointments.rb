class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :provider, null: false, foreign_key: true
      t.datetime :date
      t.boolean :accepted
      t.boolean :declined
      t.string :type_of_care
      t.integer :length_in_hours
      t.string :start_time
      t.string :notes

      t.timestamps
    end
  end
end
