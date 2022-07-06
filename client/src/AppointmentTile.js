import React from 'react'
import dateFormat from 'dateformat'

function AppointmentTile({appointment}) {

   const dateFormatted =  dateFormat(`${appointment.date}`, "mmmm dS, yyyy")

  return (<div className="appointmentCard">
    <div>{appointment.total}</div>
    <div>Care Provider:{appointment.provider.first_name} {appointment.provider.last_name}</div>
    <div>Date: {dateFormatted}</div>
    <div>Start Time: {appointment.start_time}</div>
    <div>Length: {appointment.length_in_hours} Hours</div>
    <div>Booking Accepted: {appointment.accepted ? 'yes' : 'no'}</div>
    <div>Booking Declined: {appointment.declined ? 'yes' : 'no' }</div>
    <div>Type of Care: {appointment.type_of_care}</div>
    <div>Notes: {appointment.notes}</div>
    </div>
  )
}

export default AppointmentTile