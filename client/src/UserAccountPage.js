import React from 'react'
import UserNavBar from './UserNavBar'
import {useSelector} from 'react-redux';

function UserAccountPage() {

    const user = useSelector((state) => state.user.value)

  return (
    <>
    <UserNavBar/>
    <h2>Account Page</h2>
    <h3>Update your account details using the form below</h3>

    </>
  )
}

export default UserAccountPage