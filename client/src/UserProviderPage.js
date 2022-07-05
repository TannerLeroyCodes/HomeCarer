import React, {useEffect, useState} from 'react'
import UserNavBar from './UserNavBar'
import ProviderTile from './ProviderTile'


function UserProviderPage() {

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
    <UserNavBar/>
    <div>Provider Page</div>
    <div>Providers: </div>
    {arrOfProviders}
    </>
  )
}

export default UserProviderPage