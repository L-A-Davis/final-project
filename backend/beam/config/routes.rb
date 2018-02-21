Rails.application.routes.draw do

namespace :api do
  namespace :v1 do
    resources :comments
    resources :models
    resources :projects
    resources :relationships
    resources :users
    resources :companies
  end
end

post '/login', to: 'auth#login'
get '/current_user', to: 'auth#currentUser'
post '/signup', to: 'auth#signup'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
