import React  from 'react'
import {useSelector} from 'react-redux';
import AppointmentTile from './AppointmentTile';
import UserNavBar from './UserNavBar';

function UserHomePage() {
    let appointments = []
    const user = useSelector((state) => state.user.value)
    console.log(user)

  if (user.appointments) {
   appointments = user.appointments.map(appointment => <AppointmentTile appointment={appointment}/> )
  }

  return (<>
  <UserNavBar/>
  <h1>Home Page</h1>
    <h2>Welcome back {user.first_name}</h2>

    <h3>Appointments {appointments}</h3>
    </>
  )
}

export default UserHomePage