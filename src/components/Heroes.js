import React from 'react'

export const Heroes = (props) => {


    return (


        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.superHero}</h5>
                <p class="card-text">{props.publisher}</p>
                <p class="card-text">{props.character}</p>
                <p class="card-text">{props.age}</p>
            </div>
        </div>

    )
}