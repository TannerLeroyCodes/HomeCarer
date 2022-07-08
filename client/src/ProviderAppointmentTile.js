import React from 'react'
import dateFormat from 'dateformat'
import {useDispatch} from "react-redux";
import {login} from './features/user'

function ProviderAppointmentTile({appointment}) {

   const dateFormatted =  dateFormat(`${appointment.date}`, "mmmm dS, yyyy")
   const timeFormatted = dateFormat(`${appointment.start_time}`, "h:MM TT")
   const dispatch = useDispatch();

function sendUpdate(updatedAppointment){
    fetch(`appointments/${appointment.id}`,{
        method: "PATCH",
        headers: { "Content-Type": "application/json",}, 
        body: JSON.stringify(updatedAppointment)
        })
        .then(res => {
            if (res.ok){
            res.json()
        .then(data => {
        (dispatch(login(data)))
        })}
        })}


function handleAccept(){

const updatedAppointment = {
    accepted: true,
    declined: false
}
sendUpdate(updatedAppointment)
}

function handleDecline(){
    const updatedAppointment = {
        declined: true,
        accepted: false
    }
    sendUpdate(updatedAppointment)
}

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
    <button onClick={handleAccept}>Accept Booking</button>
    <button onClick={handleDecline}>Decline Booking</button>
    </div>
  )
}

export default ProviderAppointmentTile