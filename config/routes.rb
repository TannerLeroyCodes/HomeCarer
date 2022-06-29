Rails.application.routes.draw do
  resources :providers
  resources :user_bios
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"



  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post '/signup', to: "providers#create"
  get '/me', to: "providers#show"
  post "/login-provider", to: "sessions#login_prov"
  delete "/logout-provider", to: "sessions#logout_prov"


  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
