
import React, { useState, useEffect } from 'react'
import { Heroes } from './Heroes';
import { deleteHero } from '../helper/deleteHero';

import '../styles/card.css'
import { Alert } from './Alert';


export const GetAllHeroes = () => {


  const [showAlert, setshowAlert] = useState(false)
  const [heroId, setheroId] = useState('')
  
  //react-hero
  const getHeroes = async () => {

    const res = await fetch("http://localhost:4000/api");
    const { allHeroes } = await res.json();

    setHero(allHeroes)
  }

  const [heroes, setHero] = useState([])

  useEffect(() => {

    getHeroes()

  }, [heroes])


  let index


  const handleDeleteByID = (id) => {

    deleteHero(id)

    index = heroes.find(e => e._id === id)

    const { superHero } = index

    setheroId(superHero)


    setshowAlert(true);

    setTimeout(() => {

      setshowAlert(false)


    }, 3000)

  }

  return (

    <div className='ms-5' >

      <h1 className='mt-2 ' >All Heros</h1>
      
      {showAlert ? <Alert name={heroId} type={'danger'} /> : null}

      <div className='row heroCard  mb-5'> {

        heroes.map((hero) => (

          <Heroes

            key={hero.idCategory}

            {...hero}

            handleDeleteByID={handleDeleteByID}

          />))

      }
      
      </div>

    </div>
  )
}
