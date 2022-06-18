import React from 'react'
import '../styles/card.css'

import { Link } from 'react-router-dom'

export const Nav = () => {
  return (

    // <nav className='d-flex  me-4 justify-content-center'>

    <ul class="nav navar bg-dark mb-4 w-100 ">
      <p className='h3 ms-5 me-2 text-white'> HeroApp</p>
      <li class="nav-item">
        <Link to='/' className='nav-link  text-white btn btn-dark' >Home</Link>
      </li>
      <li class="nav-item">
        <Link to='/heroes' className=' nav-link text-white btn btn-dark' >Heroes</Link>
      </li>
      <li class="nav-item">
        <Link to='/search' className='nav-link text-white btn btn-dark'  >Search</Link>
      </li>

    </ul>

    // </nav>
  )
}
