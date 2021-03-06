import React from 'react'
import dateFormat from 'dateformat'
import Card from '@mui/material/Card'

function AppointmentTile({appointment}) {
 
   const dateFormatted =  dateFormat(`${appointment.date}`, "mmmm dS, yyyy")
   const timeFormatted = dateFormat(`${appointment.eastern_time}`, "h:MM TT Z")

   
   
  return (<Card className="card">
    <div>{appointment.total}</div>
    <div>Care Provider:{appointment.provider.first_name} {appointment.provider.last_name}</div>
    <div>Date: {dateFormatted}</div>
    <div>Start Time: {timeFormatted}</div>
    <div>Length: {appointment.length_in_hours} Hours</div>
    <div>Booking Accepted: {appointment.accepted ? 'yes' : 'no'}</div>
    <div>Booking Declined: {appointment.declined ? 'yes' : 'no' }</div>
    <div>Type of Care: {appointment.type_of_care}</div>
    <div>Notes: {appointment.notes}</div>
    </Card>
  )
}

export default AppointmentTile