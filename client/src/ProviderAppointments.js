import React from 'react'
import ProviderNavBar from './ProviderNavBar';
import {useSelector} from 'react-redux';
import ProviderAppointmentTile from './ProviderAppointmentTile';
import {Link} from 'react-router-dom'

function ProviderAppointments() {

    let appointments = []

    const user = useSelector((state) => state.user.value)
    

    if (user.appointments) {
        appointments = user.appointments.map(appointment => <ProviderAppointmentTile key={appointment.id} appointment={appointment}/> )
       }

  return (
    <>
    {user.id ? <> 
    <ProviderNavBar />
    <div>ProviderAppointments</div>
    <div>Appointments: {appointments} </div>
    </>:
    <> <h1>Please Log-in to see your account information</h1>
<Link to={'/login'}>Click here to log-in</Link>
</>}
</>
  )
}

export default ProviderAppointments