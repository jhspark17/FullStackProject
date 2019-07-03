 Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:index, :create, :show]
    get '/search', to: 'businesses#search'
    resources :categories, only: [:index, :create, :show]
    resources :reviews, only: [:index, :create, :destroy, :update, :show]
  end

  root "static_pages#root"
end
