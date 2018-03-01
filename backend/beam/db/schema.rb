# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180228151138) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "basic_info_data", force: :cascade do |t|
    t.bigint "model_id"
    t.string "company"
    t.string "ticker"
    t.string "codename"
    t.boolean "acquiror"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_basic_info_data_on_model_id"
  end

  create_table "capitalization_info_data", force: :cascade do |t|
    t.bigint "model_id"
    t.string "company"
    t.string "item_name"
    t.string "item_type"
    t.float "amount"
    t.boolean "repay"
    t.float "rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_capitalization_info_data_on_model_id"
  end

  create_table "cash_flow_info_data", force: :cascade do |t|
    t.bigint "model_id"
    t.string "company"
    t.string "item_name"
    t.float "amount_year1"
    t.float "amount_year2"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_cash_flow_info_data_on_model_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.bigint "user_id"
    t.bigint "model_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_comments_on_model_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equity_info_data", force: :cascade do |t|
    t.bigint "model_id"
    t.string "company"
    t.decimal "currentSharePrice", precision: 10, scale: 2
    t.float "shares"
    t.decimal "dividend", precision: 10, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_equity_info_data_on_model_id"
  end

  create_table "models", force: :cascade do |t|
    t.string "name"
    t.bigint "project_id"
    t.string "data"
    t.string "model_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_models_on_project_id"
  end

  create_table "new_financing_info_data", force: :cascade do |t|
    t.bigint "model_id"
    t.string "item_name"
    t.string "item_type"
    t.float "amount"
    t.float "rate"
    t.boolean "plug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_new_financing_info_data_on_model_id"
  end

  create_table "offer_info_data", force: :cascade do |t|
    t.bigint "model_id"
    t.string "offer_type"
    t.float "offer_metric"
    t.decimal "percentage_stock", precision: 10, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_offer_info_data_on_model_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.string "deal_type"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "relationships", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followed_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followed_id"], name: "index_relationships_on_followed_id"
    t.index ["follower_id", "followed_id"], name: "index_relationships_on_follower_id_and_followed_id", unique: true
    t.index ["follower_id"], name: "index_relationships_on_follower_id"
  end

  create_table "synergies_info_data", force: :cascade do |t|
    t.bigint "model_id"
    t.string "item_name"
    t.string "input_type"
    t.float "input_amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_synergies_info_data_on_model_id"
  end

  create_table "transaction_costs", force: :cascade do |t|
    t.bigint "model_id"
    t.string "name"
    t.string "input_type"
    t.float "data_input"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_id"], name: "index_transaction_costs_on_model_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "email"
    t.bigint "company_id"
    t.string "phone"
    t.string "address"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_users_on_company_id"
  end

  add_foreign_key "basic_info_data", "models"
  add_foreign_key "capitalization_info_data", "models"
  add_foreign_key "cash_flow_info_data", "models"
  add_foreign_key "comments", "models"
  add_foreign_key "comments", "users"
  add_foreign_key "equity_info_data", "models"
  add_foreign_key "models", "projects"
  add_foreign_key "new_financing_info_data", "models"
  add_foreign_key "offer_info_data", "models"
  add_foreign_key "projects", "users"
  add_foreign_key "synergies_info_data", "models"
  add_foreign_key "transaction_costs", "models"
  add_foreign_key "users", "companies"
end
