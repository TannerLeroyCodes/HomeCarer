import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from './features/user'


import {useNavigate} from 'react-router-dom'
// import {useSelector} from 'react-redux';


function Login({}) {

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
        .then(history("/home"))
        
    } else {
        res.json()
        .then((json) => setError(json.errors))
    }
})

}

  return (
    <div>
        <h2>HomeCarer</h2>
        <h1>Log-in</h1>
        
        <form onSubmit={handleLogin}>
        <select onChange={(e)=> setFetchEndPoint(e.target.value)}>
        <option>-</option>
        <option value={"/login"}>As a HomeCarer user</option>
        <option value={"/login-provider"}>As a HomeCarer provider</option>
    </select>
         <label>Email:</label>   
         <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
         <label>Password:</label>
         <input type="text" placeholder='Password' value={[password]} onChange={(e) => setPassword(e.target.value)}></input>
         <button type={"submit"}>Log-in</button>
        </form>

{error?<div>{error}</div>:null}

    </div>
  )
}

export default Login