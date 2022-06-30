import React from 'react'
import {useSelector} from 'react-redux';

function HomePage() {

    const user = useSelector((state) => state.user.value)
    console.log(user)

  return (
    <div>HomePage</div>
  )
}

export default HomePage