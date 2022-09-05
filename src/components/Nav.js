import React from 'react'
import '../styles/card.css'

import { Link } from 'react-router-dom'

export const Nav = () => {


  
  return (
    <ul class="nav navar bg-dark mb-4 w-100 ">
        {/* {  window.screen.width <= 640 ? */}
     {/* <img className='' src='https://res.cloudinary.com/dlsc2062n/image/upload/v1662386194/heroes/w7ki1wljooje6hydg55c.png' alt='menu'/>  */}
    
        <p className='h3 ms-5 me-2 text-white'> Heroes App</p>
        <li class="nav-item">
          <Link to='/' className='nav-link  text-white btn btn-dark'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/heroes' className=' nav-link text-white btn btn-dark' >Heroes</Link>
        </li>
        <li class="nav-item">
          <Link to='/search' className='nav-link text-white btn btn-dark'  >Search</Link>
        </li>               
    </ul> 
    
       
  )
}
