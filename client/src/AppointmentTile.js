import React from 'react'
import dateFormat from 'dateformat'

function AppointmentTile({appointment}) {
    console.log(appointment)

   const dateFormatted =  dateFormat(`${appointment.date}`, "mmmm dS, yyyy")

  return (<div className="appointmentCard">
    <div>AppointmentTile</div>
    <div>Date: {dateFormatted}</div>
    <div>Booking Accepted: {appointment.accepted ? 'yes' : 'no'}</div>
    <div>Booking Declined: {appointment.declined ? 'yes' : 'no' }</div>
    <div>Type of Care: {appointment.type_of_care}</div>
    <div>Notes: {appointment.notes}</div>
    </div>
  )
}

export default AppointmentTile