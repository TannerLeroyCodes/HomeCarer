import React, {useEffect, useState} from 'react'
import UserNavBar from './UserNavBar'
import ProviderTile from './ProviderTile'

function UserProviderPage() {
let arrayOfProviders = []
const [providers, setProviders] = useState([])

useEffect(( ) => {
    fetch("/providers")
    .then(r => r.json())
    .then(setProviders)
},[])


 arrayOfProviders = providers.map(provider => {
    <ProviderTile provider={provider}/>
})

  return (
    <>
    <UserNavBar/>
    <div>{arrayOfProviders}</div>
    </>
  )
}

export default UserProviderPage