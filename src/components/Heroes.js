import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/card.css'

export const Heroes = ({ _id, idCategory, superHero, publisher, character, age, handleDeleteByID , handleUpdateById}) => {

    return (        
            <div className="card mt-2 ps-2 pe-2 me-3  w-25 "  >
                <div className='row no-gutters ps-2 pe-2'>
                    <img src={require(`../../public/img/${idCategory}.jpg`)} className="card-img-top w-75 imgHero h-50" alt="superman" />
                    <button type="button" class="btn-close img" onClick={() => handleDeleteByID(_id)} data-bs-dismiss="alert" aria-label="Close"></button>

                    <div className="card-body">
                        <p className="card-title">Super Heroe: {superHero}</p>
                        <p className="card-text">Publicador: {publisher}</p>
                        <p className="card-text">Personaje: {character}</p>
                        <p className="card-text">Edad: {age}</p>
                        <Link to={`/HeroUpdate/${_id}`} className='btn btn-info'>Update</Link>
                    </div>
                </div>
            </div>      
    )
}