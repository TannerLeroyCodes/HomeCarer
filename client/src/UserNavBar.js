import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {useDispatch} from "react-redux";
import {logout} from './features/user'
import logo from './logo.jpg'

import Button from '@mui/material/Button';

function UserNavBar() {

  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch();

  function handleLogOut(){
    fetch("/logout", {"method": "DELETE"})
    .then(dispatch(logout(user)))
  }

  return (
    <div className='NavBar'>
      <img src={logo} alt="logo" className="logo"></img>
    <NavLink className={'navBarLink'} to="/home"> HomePage</NavLink>
    <NavLink className={'navBarLink'} to="/providers"> Providers </NavLink>   
     <NavLink className={'navBarLink'} to="/account"> Account </NavLink>
     {user.id ? <Button variant="contained" onClick={handleLogOut}>Log-out</Button>: null}
</div>
  )
}

export default UserNavBar