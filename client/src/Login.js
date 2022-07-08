import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from './features/user'
import {Link} from 'react-router-dom'


import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


import {useNavigate} from 'react-router-dom'
// import {useSelector} from 'react-redux';


function Login() {

const dispatch = useDispatch();
// const user1 = useSelector((state) => state.user.value)


const history = useNavigate();

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState([])
const [fetchEndPoint, setFetchEndPoint] = useState("")


function handleLogin(e){
    e.preventDefault();
    
    const user = {
        email: email,
        password: password
    }

    const historyEndPoint = () => {
        if (fetchEndPoint === "/login"){
           return  "/home"
        } else {
            return "/provider-home"
        }
    }


fetch(`${fetchEndPoint}`,  {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(user)
})
.then(res=> {
   if (res.ok){
        res.json()
        .then(user =>{
            dispatch(login(user))
        })
        .then(history(historyEndPoint()))
        
    } else {
        res.json()
        .then((json) => setError(json.errors))
    }
})

}

  return (
 
        <Container component="main" maxWidth="xs">
        <h2>HomeCarer</h2>
        <h1>Log-in</h1>
        
        <Box sx={{   marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' }}>
        <form className="login-form" onSubmit={handleLogin}>
        <select onChange={(e)=> setFetchEndPoint(e.target.value)}>
        <option>-</option>
        <option value={"/login"}>As a HomeCarer user</option>
        <option value={"/login-provider"}>As a HomeCarer provider</option>
        </select>
         <label>Account Type</label>
         <input type="text" placeholder='Email*' value={email} onChange={(e) => setEmail(e.target.value)}></input>
         <label>Email </label>   
         <input type="text" placeholder='Password*' value={[password]} onChange={(e) => setPassword(e.target.value)}></input>
         <label>Password    </label>
         <Button variant="contained" type={"submit"}>Log-in</Button>
        </form>
        </Box>

       
    <Link to={'/'}>Dont have an account? Click here to sign-up</Link>

{error?<div>{error}</div>:null}

  </Container>
   
  )
}

export default Login