class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


# before_action :is_authorized?


def current_user
    User.find_by(id: session[:user_id]) 
end

def current_provider
    Provider.find_by(id: session[:provider_id])
end 

  def is_authorized? 
    # byebug
    @current_user = User.find_by(id: session[:user_id]) || @current_provider = Provider.find_by(id: session[:provider_id])
    render json: {errors: ["Not authorized", "Must log-in or create an account to access the HomeCarer Application"]}, status: :unauthorized unless @current_user || @current_provider
  end



private 

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors}, status: :unprocessable_entity
    end 
        
    def render_not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end

end
