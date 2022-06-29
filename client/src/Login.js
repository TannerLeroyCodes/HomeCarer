import React, {useState} from 'react';
// import {useDispatch} from "react-redux";
// import {login} from './features/user'


// import {useNavigate} from 'react-router-dom'
// import {useSelector} from 'react-redux';


function Login({}) {

// const dispatch = useDispatch();
// const user1 = useSelector((state) => state.user.value)


// const history = useNavigate();

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState([])


function handleLogin(e){
    e.preventDefault();
    
    const user = {
        email: email,
        password: password
    }
fetch("/login",  {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(user)
})
.then(res=> {
   if (res.ok){
        res.json()
        .then(user =>{
            // dispatch(login(user))
        })
        // .then(history("/orders"))
        

    } else {
        res.json()
        .then((json) => setError(json.errors))
    }


})

}

  return (
    <div>
        <h2>A convenient stop for all your shopping needs</h2>
        <h1>Log-in</h1>
        
        <form onSubmit={handleLogin}>
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