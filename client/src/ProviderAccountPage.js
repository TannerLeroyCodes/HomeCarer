import React, {useState} from 'react'
import ProviderNavBar from './ProviderNavBar';
import {useSelector} from 'react-redux';

function ProviderAccountPage() {

    const user = useSelector((state) => state.user.value)

    const [location, setLocation] = useState("")
    const [certifiedNurseAide, setCertifiedNurseAide] = useState(false)
    const [registeredNurse, setRegisteredNurse] = useState(false)
    const [yearsInHealthcare, setYearsInHealthcare] = useState("")
    const [personalCare, setPersonalCare] = useState(false)
    const [nursingCare, setNursingCare] = useState(false)
    const [rate, setRate] = useState("")
    const [description, setDescription] = useState("")

    const [error, setErrors] = useState([])


    const handleUpdate = (e) =>{
        e.preventDefault();
        console.log(user)

        const updatedBio = {
            location: location,
            description: description,
            certified_nurse_aide: certifiedNurseAide,
            registered_nurse: registeredNurse,
            personal_care: personalCare,
            nursing_care: nursingCare,
            years_in_healhcare: yearsInHealthcare,
            rate: rate
        }

        fetch(`provider_bios/${user.provider_bio.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBio)
        })
        .then(r => r.json())
        .then((data)=> console.log(data))
    }

    const handlePullCurrentBio = (e) => {
        e.preventDefault();
    
        setLocation(user.provider_bio.location)
        setDescription(user.provider_bio.description)
        setCertifiedNurseAide(user.provider_bio.certified_nurse_aide)
        setRate(user.provider_bio.rate)
        setYearsInHealthcare(user.provider_bio.years_in_healhcare)
    }


  return (
  <>
  <ProviderNavBar />
  <h2>Account Page</h2>
    <h3>Update your account details using the form below</h3>
    
 <button onClick={handlePullCurrentBio}>Pull Current Bio</button>

    <form onSubmit={handleUpdate}>
      <label>Location: </label>  
      <input className="input" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}></input>
      <label>Provider Bio: </label>  
      <input className="input-large" type="text" placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <label>Certified Nurse: </label>  
      <input className="checkbox" type="checkbox"  value={certifiedNurseAide} onChange={(e) => setCertifiedNurseAide(e.target.value)}></input>
      <label>Registered Nurse : </label>  
      <input className="checkbox" type="checkbox"  value={registeredNurse} onChange={(e) => setRegisteredNurse(e.target.value)}></input>
      <label>Open to Personal Care Appointments: </label>  
      <input className="checkbox" type="checkbox"  value={personalCare} onChange={(e) => setPersonalCare(e.target.value)}></input>
      <label>Open to Nursing Care Appointments : </label>  
      <input className="checkbox" type="checkbox"  value={nursingCare} onChange={(e) => setNursingCare(e.target.value)}></input>
      <label>Years working in Healthcare: </label>  
      <input className="input" type="text" placeholder="Years in Healthcare" value={yearsInHealthcare} onChange={(e) => setYearsInHealthcare(e.target.value)}></input>
      <label>Rate: </label>  
      <input className="input" type="text" placeholder="Rate" value={rate} onChange={(e) => setRate(e.target.value)}></input>
    
    <button> Update Bio</button>

    </form>

    </>
  )
}

export default ProviderAccountPage