import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Alert } from './Alert';

export const HeroUpdate = () => {

    const { id } = useParams();

    const [heroes, setHeroes] = useState({})
    const [showalert, setshowalert] = useState(false)

    const getHeroesToUpdate = async () => {

        const response = await fetch(`http://localhost:4000/api/${id}`);
        const data = await response.json();
        setHeroes(data)
    }

    useEffect(() => {

        getHeroesToUpdate();

    }, [])

    const { superHero, publisher, character, age } = heroByid;

    const handleInputUpdate = (e) => {
        setHeroes({
            ...heroes,
            [e.target.name]: e.target.value
        })
    }


    const onUpdate = async () => {

        const request = await fetch(`http://localhost:4000/api/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(heroes)
        })
        const response = await request.json();

        setshowalert(true)

        setTimeout(() => {

            setshowalert(false)
            
        }, 3000);

    }


    return (


        <div className='container w-75 justify-content-center'>

            { showalert ? <Alert name={superHero} type={'info'} /> : null}            

            <label for='hero' className='form-label'>Super Hero</label>
            <input type='text' onChange={handleInputUpdate} value={superHero} name='superHero' className='form-control' />

            <label for='Publisher' className='form-label'>Publisher</label>
            <input type='text' onChange={handleInputUpdate} value={publisher} name='publisher' className='form-control' />

            <label for='character' className='form-label'>Character</label>
            <input type='text' onChange={handleInputUpdate} value={character} name='character' className='form-control' />

            <label for='age' className='form-label'>Age </label>
            <input type='text' onChange={handleInputUpdate} value={age} name='age' className='form-control' />

            <button onClick={onUpdate} className='btn btn-info mt-2'>Update a Hero</button>

        </div>

    )
}

