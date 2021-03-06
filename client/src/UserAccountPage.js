import React, {useState} from 'react'
import UserNavBar from './UserNavBar'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {login} from './features/user'


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function UserAccountPage() {

    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [patientAge, setPatientAge] = useState("")
    const [patientDescription, setPatientDescription] = useState("")
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();


    const user = useSelector((state) => state.user.value)

    const handleUpdate = (e) =>{
        e.preventDefault();
        // console.log(user)

        const updatedBio = {
            location: location,
            description: description,
            patient_age: patientAge,
            patient_description: patientDescription
        }
        console.log(updatedBio)

        fetch(`user_bios/${user.user_bio.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBio)
        })
        .then(res => {
            if (res.ok){
            res.json()
        .then(data => {
        (dispatch(login(data)))
    })} else{
        res.json()
        .then((json) => setErrors(json.errors))
    }
})}
 
  

const handlePullCurrentBio = (e) => {
    e.preventDefault();

    setLocation(user.user_bio.location)
    setDescription(user.user_bio.description)
    setPatientAge(user.user_bio.patient_age)
    setPatientDescription(user.user_bio.patient_description)
}
    
     




  return (
    <>
    {user.id ? <> 
    <UserNavBar/>
    <h2>Account Page</h2>
    <h3>-{user.full_name}-</h3>
    <h3>Update your account details using the form below</h3>
    
 <Button variant="contained" onClick={handlePullCurrentBio}>Pull Current Bio</Button>

    <form className="form-userpage " onSubmit={handleUpdate}>
      <label>Location: </label>  
      <TextField className="input" variant="outlined" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}></TextField>
      <label>User Bio: </label>  
      <TextField className="input-large" multiline maxRows={6} type="text" placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)}></TextField>
      <label>Patient Age: </label>  
      <TextField className="input" type="text" placeholder="Patient Age" value={patientAge} onChange={(e) => setPatientAge(e.target.value)}></TextField>
      <label>Patient Description: </label>  
      <TextField className="input-large" multiline maxRows={6} type="text" placeholder="Patient Age" value={patientDescription} onChange={(e) => setPatientDescription(e.target.value)}></TextField>
    <button variant="contained"> Update Bio</button>

    </form>

    {errors?<div> {errors}</div>:null}


</> 
:
<> <h1>Please Log-in to see your account information</h1>
<Link to={'/login'}>Click here to log-in</Link>
</>}
</>

  )}


export default UserAccountPage