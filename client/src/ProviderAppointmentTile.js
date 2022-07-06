import React from 'react'
import dateFormat from 'dateformat'

function ProviderAppointmentTile({appointment}) {

   const dateFormatted =  dateFormat(`${appointment.date}`, "mmmm dS, yyyy")

  return (<div className="appointmentCard">
    <div>Client: {appointment.user.first_name} {appointment.user.last_name}</div>
    <div>Date: {dateFormatted}</div>
    <div>Booking Accepted: {appointment.accepted ? 'yes' : 'no'}</div>
    <div>Booking Declined: {appointment.declined ? 'yes' : 'no' }</div>
    <div>Type of Care: {appointment.type_of_care}</div>
    <div>Start Time {appointment.start_time}</div>
    <div>Appointment Length: {appointment.length_in_hours} Hours</div>
    <div>Notes: {appointment.notes}</div>
    <button>Accept Booking</button>
    <button>Decline Booking</button>
    </div>
  )
}

export default ProviderAppointmentTile