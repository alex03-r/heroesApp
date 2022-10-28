import React from 'react'
import { HeroProvider } from './contex/HeroProvider'
import { AppRoute } from './routes/AppRoute'

import './styles/main.css'

export const HeroMain = () => {


  return (

     <HeroProvider>
           <AppRoute/>
      </HeroProvider>

  )
}
