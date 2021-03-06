import React, {useState} from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {login} from './features/user'
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card'

function ProviderTile({provider}) {

  const user = useSelector((state) => state.user.value)
  const history = useNavigate();


  const [showForm, setShowForm] = useState(false)
  const [formDate, setFormDate] = useState("")
  const [formTypeOfCare, setFormTypeOfCare] = useState("")
  const [formLength, setFormLength] = useState("")
  const [formNotes, setFormNotes] = useState("")
  const [formStartTime, setFormStartTime] = useState("")

  const [errors, setErrors] = useState([])

  const dispatch = useDispatch();

const startForm = () => {
setShowForm(!showForm)
}

function handleNewAppointment(e){
  e.preventDefault()

  const newAppointmentObj = {
    user_id: user.id,
    provider_id: provider.id,
    date: formDate,
    type_of_care: formTypeOfCare,
    start_time: formStartTime,
    notes: formNotes,
    length_in_hours: formLength,
    declined: false,
    accepted: false
  }


  fetch(`appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newAppointmentObj)
  })
  .then(res => {
    if (res.ok){
    res.json()
.then(data => {
(dispatch(login(data)))
})
.then(history("/home"))
}
else {
  res.json()
  .then((json) => setErrors(json.errors))
  }
  })





}

  return (
    <>
  <Card className="card">
  <div>-HomeCarer Provider-</div>
  <div>Name: {provider.first_name} {provider.last_name}</div>
  <div>Location: {provider.provider_bio.location}</div>
  <div>Certified Nurse Aide: {provider.provider_bio.certified_nurse_aide ? "True" : "False"}</div>
  <div>Registered Nurse: {provider.provider_bio.registered_nurse ? "True" : "False"}</div>
  <div>Years in Healthcare: {provider.provider_bio.year_in_healthcare}</div>
  <div>Accepts Personal Care Appointments: {provider.provider_bio.personal_care ? "Yes" : "No" }</div>
  <div>Accepts Nursing Care Appointments: {provider.provider_bio.nursing_care ? "Yes" : "No" }</div>
  <div>Rate: {provider.provider_bio.rate} Dollars per hour</div>
  <div>Provider Bio: {provider.provider_bio.description}</div>
  <button onClick={startForm}>Schedule an Appointment</button>
  {showForm && (
    <form onSubmit={handleNewAppointment} className="form-appointment">
      <label className="appointment-label">Date:  
         <input type="date" placeholder="Date" value={formDate} onChange={(e) => setFormDate(e.target.value)}></input>
    </label>
      <label className="appointment-label">Type of Care:
         <input type="text" placeholder="Personal or Nursing Care" value={formTypeOfCare} onChange={(e) => setFormTypeOfCare(e.target.value)}></input>
         </label>
      
      <label className="appointment-label">Start Time: 
        <input type="time" placeholder="Appointment Starting Time" value={formStartTime} onChange={(e) => setFormStartTime(e.target.value)}></input>
      </label>
     
      <label className="appointment-label">Length in Hours: 
        <input type="text" placeholder="Appointment Duration" value={formLength} onChange={(e) => setFormLength(e.target.value)}></input>
      </label>

      <label className="appointment-label">Notes: 
        <input type="text" placeholder="Notes" value={formNotes} onChange={(e) => setFormNotes(e.target.value)}></input>
      </label>
    
      <button>Create Appointment Request</button>
      {errors?<div>{errors.map(error =>  error + ". ")}</div>:null}
    </form>
  )}
 
   </Card>
  
   </>
  )
}

export default ProviderTile