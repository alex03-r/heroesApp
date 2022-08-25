
import { HeroContex } from './HeroContex'
import { useState } from 'react'



export function HeroProvider( { children } ){


    const [heroes, setHero] = useState([])


    return(

        <HeroContex.Provider value={ { heroes, setHero  } } >

              { children}

        </HeroContex.Provider>
    )


}