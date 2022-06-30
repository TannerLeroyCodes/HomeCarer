import React from 'react'
import {useSelector} from 'react-redux';
import AppointmentTile from './AppointmentTile';

function UserHomePage() {

    const user = useSelector((state) => state.user.value)
    console.log(user)

    const appointments = user.appointments.map(appointment => <AppointmentTile appointment={appointment}/> )

  return (<>
  <h1>Home Page</h1>
    <h2>Welcome back {user.first_name}</h2>

    <h3>Appointments {appointments ? appointments : null}</h3>
    </>
  )
}

export default UserHomePage