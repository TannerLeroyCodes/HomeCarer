class ProviderBiosController < ApplicationController


    def create 
        provider_bio = ProviderBio.create!(provider_bio_params)
        render json: provider_bio, status: :created
    end 

    def update 
        provider_bio = ProviderBio.find(params[:id])
        provider_bio.update!(provider_bio_params)
        render json: provider_bio.provider, serailizer: ProviderSerializer, status: :created
    end 


    private 

    def provider_bio_params
        params.permit(:location, :certified_nurse_aide, :registered_nurse, :year_in_healthcare, :personal_care, :nursing_care, :rate, :description)
    end 


end
