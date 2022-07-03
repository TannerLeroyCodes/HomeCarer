import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {logout} from './features/user'

function ProviderNavBar() {

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch();

  function handleLogOut(){
    fetch("/logout", {"method": "DELETE"})
    .then(dispatch(logout(user)))
  }

  return (
    <div>
    <NavLink className={'navBarLink'} to="/provider-home"> HomePage</NavLink>
    <NavLink className={'navBarLink'} to="/provider-appointments"> Appointment Management </NavLink>   
     <NavLink className={'navBarLink'} to="/provider-account"> Account </NavLink>
     {user.id ? <button onClick={handleLogOut}>Log-out</button>: null}
</div>
  )
}

export default ProviderNavBar