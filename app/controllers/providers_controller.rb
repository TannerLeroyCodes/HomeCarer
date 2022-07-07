class ProvidersController < ApplicationController

    def index 
        render json: Provider.all, status: :ok
    end 


    def show 
        render json: current_provider
    end 
    
    def create 
        provider = Provider.create!(provider_params)
        session[:provider_id] = provider.id
        create_bio(provider)
        render json: provider, status: :created
    end 
    
    
private
    
    def provider_params
        params.permit(:first_name, :last_name, :email, :password)
     end 

     def create_bio(provider)
        proivider_bio = ProviderBio.create!(provider_id: provider.id, rate: 10, year_in_healthcare: 1)
     end 


end
