import React, {useEffect, useState} from 'react'
import UserNavBar from './UserNavBar'
import ProviderTile from './ProviderTile'

function UserProviderPage() {

const [providers, setProviders] = useState([])

// let arrOfProviders = []

useEffect(( ) => {
    fetch("/providers")
    .then(r => r.json())
    .then(setProviders)
},[])


//  arrOfProviders = providers.map(provider => {
//     <ProviderTile provider={provider}/>
// })

  return (
    <>
    <UserNavBar/>
    <div>Provider Page</div>
    <div>Providers: {providers.map( provider => {
    <ProviderTile provider={provider}/>
})}</div>
    </>
  )
}

export default UserProviderPage