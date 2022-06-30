Rails.application.routes.draw do
  resources :appointments
  resources :provider_bios
  resources :user_bios



  get '/providers', to: "providers#index"

  post '/signup', to: "users#create"
  get '/current-user', to: "users#show"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post '/signup-provider', to: "providers#create"
  get '/current-provider', to: "providers#show"
  post "/login-provider", to: "sessions#login_prov"
  delete "/logout-provider", to: "sessions#logout_prov"


  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
