class UsersController < ApplicationController
# skip_before_action :is_authorized?, only: [:create]

    def show 
        render json: current_user
    end 
    
    def create 
        if(user = User.create!(user_params))
        UserMailer.with(user: user).welcome_email.deliver_later
        session[:user_id] = user.id
        create_bio(user)
        render json: user, status: :created
        end
    end 

  
  
    
 private
    
    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end 

    def create_bio(user)
        proivider_bio = UserBio.create!(user_id: user.id, )
     end 

end