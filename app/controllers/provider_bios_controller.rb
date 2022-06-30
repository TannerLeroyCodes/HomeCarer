class ProviderBiosController < ApplicationController

    def show
        provider_bio = ProviderBio.find(params[:id])
        render json: provider_bio, status: :ok
    end 

    def create 
        provider_bio = ProviderBio.create!(provider_bio_params)
        render json: provider_bio, status: :created
    end 

    def update 
        provider_bio = ProviderBio.find(params[:id])
        provider_bio.update!(provider_bio_params)
        render json: provider_bio, status: :created
    end 

    # def destroy 
    #     provider_bio = providerBio.find(params[:id])
    #     provider_bio.destroy
    #     head :no_content
    # end 

    private 

    def provider_bio_params
        params.permit(:location, :certified_nurse_aide, :registered_nurse, :year_in_healthcare, :personal_care, :nursing_care, :rate, :description)
    end 


end
