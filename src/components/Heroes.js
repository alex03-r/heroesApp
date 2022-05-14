import React from 'react'

import '../styles/card.css'

export const Heroes = ({ idCategory, superHero, publisher, character, age }) => {

    return (        

            <div className="card ms-3  mt-3  w-25  "  >
                <img src={require(`../../public/img/${idCategory}.jpg`)} className="card-img-top w-100 h-50" alt="superman" />          
                     
                <div className="card-body ">
                    <h5 className="card-title"> Bando: {idCategory}</h5>
                    <h5 className="card-title">Super Heroe: {superHero}</h5>
                    <p className="card-text"> Publicador: {publisher.toUpperCase()}</p>
                    <p className="card-text"> Personaje: {character.toUpperCase()}</p>
                    <p className="card-text"> Edad: {age}</p>                   
                </div>
            </div>      

    )
}