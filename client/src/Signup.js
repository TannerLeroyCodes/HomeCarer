import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {login} from './features/user'
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';




function Signup() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetchEndPoint, setFetchEndPoint] = useState("")

    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const history = useNavigate()
    

    function onSubmit(e){
        e.preventDefault();

        if (fetchEndPoint) {
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }
        
     fetch(`${fetchEndPoint}`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(user),
     })
     .then(res => {
        if (res.ok) {
            res.json()
            .then(user=>{
                dispatch(login(user))
                history("/login")
            })
     } else {
        res.json()
        .then(json => setErrors(json.errors))
     }
    })
    }}

  return (
    <>
    <Container component="main" maxWidth="xs">
    {/* <h4>If you are a new, please sign-up as either a HomeCarer user or a as a HomeCarer provider.</h4> */}
    <h1>Sign-up for HomeCarer</h1>
   
  
    <Box sx={{   marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' }}>


                
    <form onSubmit={onSubmit}>
    
    <select onChange={(e)=> setFetchEndPoint(e.target.value)}>
        <option>-</option>
        <option value={"/signup"} >As a HomeCarer user</option>
        <option value={"/signup-provider"} >As a HomeCarer provider</option>
    </select>
    <label> Account Type</label>
    <input type="text" placeholder="First Name*" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}></input>
    <label> First Name</label>
    <input type="text" placeholder="Last Name*" value={lastName} onChange={(e) => {setLastName(e.target.value)}}></input>
    <label> Last Name</label>
    <input type="text" placeholder="Email Address*" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
    <label> Email</label>
    <input type="text" placeholder="Password*" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
    <label> Password   </label>
    <Button variant="contained" type="submit">Sign-up</Button>
    </form>
    </Box>
    { Object.keys(errors) ? Object.keys(errors).map((key, index) => <div key={key}>{key+': ' + Object.values(errors)[index]}</div>) : null }
    
    
    <Link to={'/login'}>Already have an account? Click here to Sign in</Link>

    
    </Container>
  
    </>
  )
}

export default Signup