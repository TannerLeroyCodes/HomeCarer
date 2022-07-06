class UserBiosController < ApplicationController
# before_action :is_authorized?
 

    # def show
    #     user_bio = UserBio.find(params[:id])
    #     render json: user_bio, status: :ok
    # end 

    def create 
        user_bio = UserBio.create!(user_bio_params)
        render json: user_bio, status: :created
    end 

    def update 
        user_bio = UserBio.find(params[:id])
        user_bio.update!(user_bio_params)
        render json: user_bio.user, serailizer: UserSerializer, status: :created
    end 

    # def destroy 
    #     user_bio = UserBio.find(params[:id])
    #     user_bio.destroy
    #     head :no_content
    # end 

    private 

    def user_bio_params
        params.permit(:location, :description, :patient_age, :patient_description)
    end 

end
