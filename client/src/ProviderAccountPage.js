import React, {useState} from 'react'
import ProviderNavBar from './ProviderNavBar';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {login} from './features/user'

function ProviderAccountPage() {


    const [location, setLocation] = useState("")
    const [certifiedNurseAide, setCertifiedNurseAide] = useState(false)
    const [registeredNurse, setRegisteredNurse] = useState(false)
    const [yearsInHealthcare, setYearsInHealthcare] = useState("")
    const [personalCare, setPersonalCare] = useState(false)
    const [nursingCare, setNursingCare] = useState(false)
    const [rate, setRate] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState([])

    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch();


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
            year_in_healthcare: yearsInHealthcare,
            rate: rate
        }

        fetch(`provider_bios/${user.provider_bio.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedBio)
        })
        .then(res => {
            if (res.ok){
            res.json()
        .then(data => {
        (dispatch(login(data)))
    })} else {
        res.json()
        .then((json) => setErrors(json.errors))
    }
})}

    const handlePullCurrentBio = (e) => {
        e.preventDefault();
    
        setLocation(user.provider_bio.location)
        setDescription(user.provider_bio.description)
        setCertifiedNurseAide(user.provider_bio.certified_nurse_aide)
        setRegisteredNurse(user.provider_bio.registered_nurse)
        setRate(user.provider_bio.rate)
        setPersonalCare(user.provider_bio.personal_care)
        setNursingCare(user.provider_bio.nursing_care)
        setYearsInHealthcare(user.provider_bio.year_in_healthcare)
    }


  return (
  <>
  {user.id ? <> 
  <ProviderNavBar />
  <h2>Account Page</h2>
  <h3>-{user.full_name}-</h3>
    <h3>Update your account details using the form below</h3>
    
 <button onClick={handlePullCurrentBio}>Pull Current Bio</button>

    <form className="form" onSubmit={handleUpdate}>
      <label>Location: </label>  
      <input className="input" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}></input>
      <label>Provider Bio: </label>  
      <input className="input-large" type="text" placeholder="Bio" value={description} onChange={(e) => setDescription(e.target.value)}></input>
      <label>Certified Nurse Aide: </label>  
      <input className="checkbox" type="checkbox"  checked={certifiedNurseAide} onChange={(e) =>setCertifiedNurseAide(!certifiedNurseAide)}></input>
      <label>Registered Nurse : </label>  
      <input className="checkbox" type="checkbox"  checked={registeredNurse} onChange={(e) => setRegisteredNurse(!registeredNurse)}></input>
      <label>Open to Personal Care Appointments: </label>  
      <input className="checkbox" type="checkbox"  checked={personalCare} onChange={(e) => setPersonalCare(!personalCare)}></input>
      <label>Open to Nursing Care Appointments : </label>  
      <input className="checkbox" type="checkbox"  checked={nursingCare} onChange={(e) => setNursingCare(!nursingCare)}></input>
      <label>Years working in Healthcare: </label>  
      <input className="input" type="text" placeholder="Years in Healthcare" value={yearsInHealthcare} onChange={(e) => setYearsInHealthcare(e.target.value)}></input>
      <label>Rate: </label>  
      <input className="input" type="text" placeholder="Rate" value={rate} onChange={(e) => setRate(e.target.value)}></input>
    
    <button> Update Bio</button>

    </form>

    {errors? <div> {errors}</div>:null}

    </>
    :
    <> <h1>Please Log-in to see your account information</h1>
    <Link to={'/login'}>Click here to log-in</Link>
    </>}
    </>
  )
}

export default ProviderAccountPage