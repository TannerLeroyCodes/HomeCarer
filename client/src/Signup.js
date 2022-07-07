import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {login} from './features/user'
import {useNavigate} from 'react-router-dom';



function Signup() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetchEndPoint, setFetchEndPoint] = useState("")

    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const history = useNavigate()

    // function createCondtionalBio(){
    //     if (fetchEndPoint === "/signup"){
    //        return  "/user_bios"
    //     } else {
    //         return "/provider_bios"
    //     }
    // }

    // function conditionalUserOrProvider(){
    //     if (fetchEndPoint === "/signup"){
    //         return  "user_id"
    //      } else {
    //          return "provider_id"
    //      }
    // }


    function onSubmit(e){
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }

        // const user_bio = {
    
        // }

        
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
            // .then(
            //     fetch(createCondtionalBio(),{
            //         method: "POST",
            //         headers: {'Content-Type': 'application/json'},
            //         body: JSON.stringify
            //     }
            //     )
            //     )

     } else {
        res.json()
        .then(json => setErrors(json.errors))
     }
    })
    }

  return (
    <>
    <h1>Sign-up</h1>
  
    
    <form onSubmit={onSubmit}>
    <select onChange={(e)=> setFetchEndPoint(e.target.value)}>
        <option>-</option>
        <option value={"/signup"} >As a HomeCarer user</option>
        <option value={"/signup-provider"} >As a HomeCarer provider</option>
    </select>
    <label> First Name</label>
    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}></input>
    <label> Last Name</label>
    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}></input>
    <label> Email</label>
    <input type="text" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
    <label> Password</label>
    <input type="text" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
    <button type="submit">Sign-up</button>
    </form>
    { Object.keys(errors) ? Object.keys(errors).map((key, index) => <div key={key}>{key+': ' + Object.values(errors)[index]}</div>) : null }
  
    </>
  )
}

export default Signup