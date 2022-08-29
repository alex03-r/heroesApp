
import React, { useState, useEffect, useContext } from 'react'
import { Heroes } from './Heroes';
import { deleteHero } from '../helper/deleteHero';

import '../styles/card.css'
import { Alert } from './Alert';
// import { HeroContex } from '../contex/HeroContex';
export const GetAllHeroes = () => {


  const [showAlert, setshowAlert] = useState(false)
  const [heroId, setheroId] = useState('')
  const [heroes, setHero] = useState([])

  //react-hero
  const getHeroes = async () => {
    const res = await fetch("http://localhost:4000/api");
    const { allHeroes } = await res.json();
    setHero(allHeroes);    
  }


  useEffect(() => {

    getHeroes(); 

  }, [])

  let index

//https://api.cloudinary.com/v1_1/{{cloud_name}}/:resource_type/destroy

  const handleDeleteByID = (id) => {

    console.log("helloo");
    // let splitedImg = imgId.split('/');

    // let pubicId = splitedImg[ splitedImg.length - 1];

    // let real = `heroes/${pubicId}`;

    // let final =  real.substring(0 , real.length - 4);

    deleteHero( id )

    index = heroes.find(e => e._id === id)

    const { superHero } = index

    setheroId(superHero)


    setshowAlert(true);

    setTimeout(() => {

      setshowAlert(false)
    }, 3000)

  }

  return (

    <div className='containerHeroes' >

      <h1 className='mt-1'>All Hereos  </h1>

      {showAlert ? <Alert name={heroId} type={'danger'} /> : null}

      {  heroes.length == 0 ?  <Alert type={'warning'} />   :      null  }

          <div className='row heroCard'>
            {
              heroes.map((hero) => (
                <Heroes
                  key={hero._id}
                  {...hero}
                  handleDeleteByID={handleDeleteByID}
                />))

            }

          </div>
          
    </div>
  )
}
