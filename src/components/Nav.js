import React from 'react'

import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
   
    <nav>
        <Link className=' btn btn-primary' to='/heroes'>Heroes</Link>
        <Link  to='/'></Link>
    </nav>
  )
}
