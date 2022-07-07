class ProviderMailer < ApplicationMailer

    default from: ENV['GMAIL_USERNAME']
    
end
