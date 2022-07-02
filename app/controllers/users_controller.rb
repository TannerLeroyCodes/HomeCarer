class UsersController < ApplicationController
# skip_before_action :is_authorized?, only: [:create]

    def show 
        render json: current_user
    end 
    
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end 
    
  
    
 private
    
    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end 

end