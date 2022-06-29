# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_29_132211) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "provider_id", null: false
    t.datetime "date"
    t.boolean "accepted"
    t.boolean "declined"
    t.string "type_of_care"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["provider_id"], name: "index_appointments_on_provider_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "provider_bios", force: :cascade do |t|
    t.bigint "provider_id", null: false
    t.string "location"
    t.boolean "certified_nurse_aide"
    t.boolean "registered_nurse"
    t.integer "year_in_healthcare"
    t.boolean "personal_care"
    t.boolean "nursing_care"
    t.float "rate"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["provider_id"], name: "index_provider_bios_on_provider_id"
  end

  create_table "providers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "notifications"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_bios", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "location"
    t.string "description"
    t.integer "patient_age"
    t.string "patient_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_bios_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "notifications"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "appointments", "providers"
  add_foreign_key "appointments", "users"
  add_foreign_key "provider_bios", "providers"
  add_foreign_key "user_bios", "users"
end
