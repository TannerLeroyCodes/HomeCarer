import React, {useState} from 'react'
import UserNavBar from './UserNavBar'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

function UserAccountPage() {

    const user = useSelector((state) => state.user.value)
    

  
    const [location, setLocation] = useState("")
    const [error, setErrors] = useState([])


  return (
    <>
    {user.id ? <> 
    <UserNavBar/>
    <h2>Account Page</h2>
    <h3>Update your account details using the form below</h3>
    

    <form>
      <label>Location </label>  
      <input className="input" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}></input>
    </form>
</> :<> <h1>Please Log-in to see your account information</h1>
<Link to={'/login'}>Click here to log-in</Link>
</>}
</>

  )}


export default UserAccountPage