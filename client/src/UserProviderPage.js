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



  return (
    <>
     {user.id ? <> 
    <UserNavBar/>
    <h1>HomeCarer Provider Page</h1>
    <h2>Providers: </h2>
    {arrOfProviders}
    </> :
     <> <h1>Please Log-in to see our providers</h1>
     <Link to={'/login'}>Click here to log-in</Link>
     </>}
     </>
  )
}

export default UserProviderPage