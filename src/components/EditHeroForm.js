import React, { useState, useEffect, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { HeroContex } from '../contex/HeroContex';
import { Alert } from './Alert';

export const EditHeroForm = () => {

    const { id } = useParams();
    const {  uploadImg  , clearInputs , getHeroes , editHero } = useContext(HeroContex);

    const [heroes, setHeroes] = useState({});
    const [showalert, setshowalert] = useState(false);

    const imgUrlRef = useRef();
    const superHeroRef = useRef();
    const publisherRef = useRef();
    const characterRef = useRef();
    const ageRef = useRef(); 
 

    useEffect(() => { 
     
        getHeroes(id)
          .then(data => setHeroes(data) )

    }, [])

    const { superHero, publisher , character, age  } = heroes;
    

    const onUpdate = async () => {
         
        let url = await uploadImg(imgUrlRef);     

        const payload = {
            
            superHero: superHeroRef.current.value,
            publisher: publisherRef.current.value,
            character: characterRef.current.value,
            age: parseInt(ageRef.current.value),
            imgUrl: url
        }

        editHero(payload, id);

        setshowalert(true)

        setTimeout(() => {
            setshowalert(false);
     
            
        }, 1000);

        clearInputs(imgUrlRef, superHeroRef, publisherRef, characterRef, ageRef);
    }


    return (

        <div className='container w-75 justify-content-center'>

            { showalert ? <Alert name={superHero} type={'info'} /> : null}            

            <input type='file' ref={imgUrlRef}  className='form-control' />

            <label for='hero' className='form-label'>Super Hero</label>
           
            <input type='text'  ref={superHeroRef}  placeholder={superHero}  name='superHero' className='form-control' />
          
            <label for='Publisher' className='form-label'>Publisher</label>
            <input type='text' ref={publisherRef}  placeholder={publisher }  name='publisher' className='form-control' />
           
            <label for='character' className='form-label'>Character</label>
            <input type='text' ref={characterRef} placeholder={character }   name='character' className='form-control' />
           
            <label for='age' className='form-label'>Age </label>
            <input type='text' ref={ageRef} placeholder={age}   name='age' className='form-control' />

            <button  onClick={onUpdate} className='btn btn-info mt-2'>Update a Hero</button>
       
        </div>

    )
}

