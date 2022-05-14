import React from 'react'

import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
   
    <nav className='d-flex  me-4 justify-content-center'>
         <p className='h3 ms-5 me-2'> HeroApp</p>
        <Link  to='/' className='btn btn-primary me-3'>Home</Link>
        <Link className=' btn btn-primary me-3' to='/heroes'>Heroes</Link>
        <Link to='/search' className='btn btn-info'>Search</Link>
        
    </nav>
  )
}
