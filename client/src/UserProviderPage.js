import React, {useEffect, useState} from 'react'
import UserNavBar from './UserNavBar'
import ProviderTile from './ProviderTile'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';




function UserProviderPage() {

const user = useSelector((state) => state.user.value)
  
const [providers, setProviders] = useState([])

let arrOfProviders = []

useEffect(( ) => {
    fetch("/providers")
    .then(r => r.json())
    .then(setProviders)
},[])

// const renderProviders = async ( ) => {
if (providers.length !== 0) {
    // console.log(providers)
 arrOfProviders = providers.map(provider => <ProviderTile key={provider.id} provider={provider}/>)
}

// return arrOfProviders
// }

// renderProviders()


  return (
    <>
     {user.id ? <> 
    <UserNavBar/>
    <div>Provider Page</div>
    <div>Providers: </div>
    {arrOfProviders}
    </> :
     <> <h1>Please Log-in to see your account information</h1>
     <Link to={'/login'}>Click here to log-in</Link>
     </>}
     </>
  )
}

export default UserProviderPage