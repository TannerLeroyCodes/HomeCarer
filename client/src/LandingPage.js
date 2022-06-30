import React from 'react'
import Signup from './Signup'
// import Login from './Login'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (<>
    <h1>LandingPage</h1>

    <div>If you are a new, please sign-up as either a HomeCarer user or a as a HomeCarer provider</div>
  
    <Signup />

    <div>If you already have an account, please sign-in using the link  below</div>
    <Link to={'/login'}>Click here to log-in</Link>


    </>
  )
}

export default LandingPage