class AppointmentsController < ApplicationController
 
    def create 
        
        appointment = Appointment.create!(appointment_params)
        # debugger
        render json: appointment.user, serailizer: UserSerializer, status: :created
    end 

    def update 
        appointment = Appointment.find(params[:id])
        appointment.update!(update_params)
        render json: appointment.provider, serailizer: ProviderSerializer, status: :created
    end 


    private 

    def appointment_params
        params.permit(:user_id, :provider_id, :date, :type_of_care, :notes, :length_in_hours, :start_time, :declined, :accepted)
    end 

    def update_params
        params.permit(:accepted, :declined)
    end 


end
