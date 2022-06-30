import React from 'react'
import {NavLink} from 'react-router-dom'

function UserNavBar() {
  return (
    <div>
    <NavLink className={'navBarLink'} to="/home"> HomePage</NavLink>
    <NavLink className={'navBarLink'} to="/providers"> Providers </NavLink>   
     <NavLink className={'navBarLink'} to="/account"> Account </NavLink>
     {/* {user.id ? <button onClick={handleLogOut}>Log-out</button>: null} */}
</div>
  )
}

export default UserNavBar