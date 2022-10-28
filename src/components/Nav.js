import React from 'react'
import '../styles/card.css'

import { Link } from 'react-router-dom'

export const Nav = () => {
  
  return (
    <ul class="nav navar bg-dark mb-1 w-100 "> 
        <li class="nav-item">
          <Link to='/' className=' nav-link fs-5  text-white' ><small>Heroes</small></Link>
        </li>
        <li class="nav-item">
          <Link to='/search' className='nav-link fs-5  text-white'><small>Search</small></Link>
        </li>               
    </ul> 
    
       
  )
}
