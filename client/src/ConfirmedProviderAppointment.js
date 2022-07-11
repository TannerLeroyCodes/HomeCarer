import React from 'react'
import dateFormat from 'dateformat'

function ConfirmedProviderAppointment({appointment}) {

   const dateFormatted =  dateFormat(`${appointment.date}`, "mmmm dS, yyyy")
   const timeFormatted = dateFormat(`${appointment.eastern_time}`, "h:MM TT")


  return (<div className="card">
  <div>Client: {appointment.user.first_name} {appointment.user.last_name}</div>
    <div>Date: {dateFormatted}</div>
    <div>Booking Accepted: {appointment.accepted ? 'yes' : 'no'}</div>
    <div>Booking Declined: {appointment.declined ? 'yes' : 'no' }</div>
    <div>Type of Care: {appointment.type_of_care}</div>
    <div>Start Time {timeFormatted}</div>
    <div>Appointment Length: {appointment.length_in_hours} Hours</div>
    <div>Appointment Total: {appointment.price} Dollars</div>
    <div>Notes: {appointment.notes}</div>
    </div>
  )
}

export default ConfirmedProviderAppointment