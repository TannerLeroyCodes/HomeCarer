class SessionsController < ApplicationController

    def login
        
        user = User.find_by(email: params[:email])
        if  user&.authenticate(params[:password])
          session[:user_id] ||= user.id
          render json: user,  status: :ok
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end
    
    def logout
        session.delete :user_id
        head :no_content
    end

    def login_prov
        provider = Provider.find_by(email: params[:email])
        if provider&.authenticate(params[:password])
            session[:provider_id] ||= provider.id
            render json: provider,  status: :ok 
        else 
            render json: {errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end 
    
    def logout_prov
        session.delete :provider_id
        head :no_content
    end 

end
