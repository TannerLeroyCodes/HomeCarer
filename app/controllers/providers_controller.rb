class ProvidersController < ApplicationController



    def show 
        render json: @current_provider
    end 
    
    def create 
        provider = Provider.create!(provider_params)
        session[:provider_id] = provider.id
        render json: provider, status: :created
    end 
    
  
    
private
    
    def provider_params
        params.permit(:first_name, :last_name, :email, :password)
     end 


end
