
import React, { useState, useEffect, useContext } from 'react'
import { Heroes } from './Heroes';

import { HeroContex } from '../contex/HeroContex';
import '../styles/card.css'
import { Alert } from './Alert';

export const HeroesList = () => {

  const [showAlert, setshowAlert] = useState(false);
  const [superHero, setSuperHero] = useState('');
  const [heroes, setHeroes] = useState([]);

   const { getHeroes, deleteHero } =  useContext( HeroContex );

  //react-hero
  
   function obtainHeroes(){
    getHeroes(0)
    .then(heroes => setHeroes(heroes) )   
 }

  useEffect(() => { 

    obtainHeroes();

  },[]) 


  let heroSelected

  const handleDeleteHero = (id) => {

     deleteHero( id )  
    
    heroSelected = heroes.find(e => e._id === id);

    const { superHero } = heroSelected;

    setSuperHero(superHero)

    setshowAlert(true);

    setTimeout(() => {

      setshowAlert(false)
      obtainHeroes();      
    }, 1000)

  

  }

  return (

    <div className='containerHeroes' >

              <h1 className='mt-1'>All Hereos  </h1>     

              {showAlert ? <Alert  name={ superHero }   type={'danger'} /> : null}

              {heroes.length == 0 ?  <Alert type={'warning'} /> : null  }

              <div className='row heroCard'>
                    {
                            heroes.map((hero) => (

                                  <Heroes
                                      key={hero._id}
                                      {...hero}
                                      handleDeleteHero={ handleDeleteHero }
                                  />
                              ))
                    }
              </div>
          
    </div>
  )
}
