import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/card.css'

export const Heroes = ({ _id, idCategory, superHero, publisher, character, age, handleDeleteByID , handleUpdateById}) => {

    return (        
        
            <div className="card"  >               
                    <img src={require(`../../public/img/${idCategory}.jpg`)} className="card-img " alt="superman" />
                    <button type="button" class="btn-close img" onClick={() => handleDeleteByID(_id)} data-bs-dismiss="alert" aria-label="Close"></button>

                    <div className="card-body">
                        <p className="card-text"> Heroe: {superHero.toUpperCase()}</p>
                        <p className="card-text">Publisher: {publisher}</p>
                        <p className="card-text">Character: {character}</p>
                        <p className="card-text">Age: {age}</p>
                        <Link to={`/HeroUpdate/${_id}`} className='btn btn-info'>Update</Link>
                    </div>
                
            </div>      
    )
}