Rails.application.routes.draw do

namespace :api do
  namespace :v1 do
    resources :comments
    resources :models
    resources :projects
    resources :relationships
    resources :users
    resources :companies
    resources :transaction_costs
    resources :capitalization_info_data
    resources :offer_info_data
    resources :equity_info_data
    resources :basic_info_data
    resources :cash_flow_info_data
    resources :new_financing_info_data
    resources :synergies_info_data
  end
end

post '/login', to: 'auth#login'
get '/current_user', to: 'auth#currentUser'
post '/signup', to: 'auth#signup'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
