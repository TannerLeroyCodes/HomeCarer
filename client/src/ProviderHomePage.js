import React from 'react'
import {useSelector} from 'react-redux';
import AppointmentTile from './AppointmentTile';
import ProviderNavBar from './ProviderNavBar';
import {Link} from 'react-router-dom'

function ProviderHomePage() {

    let appointments = []
    const user = useSelector((state) => state.user.value)
  

  if (user.appointments) {
   appointments = user.appointments.map(appointment => 
    // { if (appointment.accepted){
   <AppointmentTile key={appointment.id} appointment={appointment}/> 

// }}
   
   )
  }


  return ( <>
    {user.id ? <> 
    <ProviderNavBar/>
    <h1>Home Page</h1>
      <h2>Welcome back {user.first_name}</h2>
  
      <h3>Appointments {appointments}</h3>
      </> :
      <> <h1>Please Log-in to see your account information</h1>
  <Link to={'/login'}>Click here to log-in</Link>
  </>}
  </>
  )
}

export default ProviderHomePage