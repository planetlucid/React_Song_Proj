Rails.application.routes.draw do
  namespace :api do
    resources :songs, except: [:new, :edit]
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  