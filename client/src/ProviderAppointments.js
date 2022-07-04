import React from 'react'
import ProviderNavBar from './ProviderNavBar';
import {useSelector} from 'react-redux';
import ProviderAppointmentTile from './ProviderAppointmentTile';

function ProviderAppointments() {

    let appointments = []

    const user = useSelector((state) => state.user.value)
    

    if (user.appointmentss) {
        console.log(user)
        // appointments = user.appointments.map(appointment => <ProviderAppointmentTile key={appointment.id} appointment={appointment}/> )
       } else {
        console.log(user)
       }


  return (
    <>
    <ProviderNavBar />
    <div>ProviderAppointments</div>
    <div>Appointments: {appointments} </div>
    </>
  )
}

export default ProviderAppointments