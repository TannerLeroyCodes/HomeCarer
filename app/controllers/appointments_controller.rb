class AppointmentsController < ApplicationController
    # before_action :is_authorized?

    def index
        render json: Appointment.all, status: :ok
    end 


    def show
        appointment = Appointment.find(params[:id])
        render json: appointment, status: :ok
    end 

    def create 
        appointment = Appointment.create!(appointment_params)
        render json: appointment.user, serailizer: UserSerializer, status: :created
    end 

    def update 
        appointment = Appointment.find(params[:id])
        appointment.update!(appointment_params)
        render json: appointment.user, serailizer: UserSerializer, status: :created
    end 

    def destroy 
        appointment = Appointment.find(params[:id])
        appointment.destroy
        head :no_content
    end 

    private 

    def appointment_params
        params.permit(:user_id, :provider_id, :date, :accepted, :declined, :type_of_care, :notes, :length_in_hours, :start_time)
    end 

end
