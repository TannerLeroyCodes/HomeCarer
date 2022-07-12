import React from 'react'
import Signup from './Signup'
import logo from "./logo.jpg"

function LandingPage() {
  return (<div className="landing">
    <h1> <img src={logo} className="logo-landing" alt="logo"></img>HomeCarer </h1>
    
    <h3>Committed to imrpoving the in-home healthcare experience for those in need of care and for those providing it</h3>
  
    <Signup />

    </div>
  )
}

export default LandingPage