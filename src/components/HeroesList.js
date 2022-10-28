
import React, { useState, useEffect, useContext } from 'react'
import { Heroes } from './Heroes';

import { HeroContex } from '../contex/HeroContex';
import { AddHeroForm } from './AddHeroForm';
import '../styles/card.css'
import { Alert } from './Alert';

export const HeroesList = () => {

  const [showAlert, setshowAlert] = useState(false);
  const [superHero, setSuperHero] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [canAddHero, setcanAddHero] = useState(false);

   const { getHeroes, deleteHero } =  useContext( HeroContex );

  //react-hero
  
   function obtainHeroes(){
    getHeroes(0)
    .then(heroes => setHeroes(heroes) )   
 }

  useEffect(() => { 

    obtainHeroes();

  },[ canAddHero ]) 


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

    <div className='containerHeroes'  style={{position:"relative"}} >

            <div className=' d-flex  justify-content-between' >
              <div className=' w-100 text-center'>
                <h1 className=''>All Hereos  </h1>    
              </div>
              <button className='btn btn-primary btn-sm me-3' onClick={() => setcanAddHero(true)} >+Add hero</button> 
            </div>
            {showAlert ? <Alert  name={ superHero }   type={'danger'} /> : null}

            { heroes.length == 0 ?  <Alert type={'warning'} /> : null  }

            {    canAddHero && <AddHeroForm setcanAddHero={setcanAddHero} /> }

            <div className='row justify-content-center   heroCard' >

           
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
