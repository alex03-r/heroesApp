
import React, { useState, useEffect } from 'react'
import { Heroes } from './Heroes';
import '../styles/card.css'


export const GetAllHeroes = () => {

  const getHeroes = async () => {
    const res = await fetch("http://localhost:4000/api");
    const { allHeroes } = await res.json();
   
    setHero(allHeroes);
  }

  const [heroes, setHero] = useState([])

  useEffect(() => {

    getHeroes();

  }, [])

  return (

    <div>

      <h1>All Heros</h1>

      <div className='row heroCard'> {

        heroes.map((hero) => (
          <Heroes
            key={hero.idCategory}
            {...hero}
          />))
      }
      </div>
    </div>
  )
}
