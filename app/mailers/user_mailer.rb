class UserMailer < ApplicationMailer

    default from: ENV['GMAIL_USERNAME']

def welcome_email
    @user = params[:user]

    mail(to:@user.email, subject: "Welcome to HomeCarer. Your account was created succesfully.")
end 


end
