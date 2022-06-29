class CreateProviderBios < ActiveRecord::Migration[7.0]
  def change
    create_table :provider_bios do |t|
      t.references :provider, null: false, foreign_key: true
      t.string :location
      t.boolean :certified_nurse_aide
      t.boolean :registered_nurse
      t.integer :year_in_healthcare
      t.boolean :personal_care
      t.boolean :nursing_care
      t.float :rate
      t.string :description

      t.timestamps
    end
  end
end
