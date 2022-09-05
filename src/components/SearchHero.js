import React, { useContext, useEffect, useState } from 'react'

import { Heroes } from './Heroes'
import { HeroContex } from '../contex/HeroContex';
export const SearchHero = () => {


    const [search, setsearch] = useState('');
    const [filterHero, setfilterHero] = useState([]);

    const { getHeroes } = useContext(HeroContex);

    useEffect(() => {

        getHeroes(0)
        .then(heroes => setfilterHero(heroes) )      

    }, [])

    const handleSearch = (e) => {
        setsearch(e.target.value)
    }

    const [heroFilterResult, setHeroFilterResult] = useState([])

    const searchHero = () => {

        const filterResult = filterHero.filter(hero => hero.superHero.toLowerCase().includes(search.toLowerCase()))

        console.log(filterResult)
        setHeroFilterResult(filterResult)
    }

    return (

        <div className='containerSearch'>

            <h1>Search Hero</h1>
            <input type='text' className='form-control w-25' onKeyUp={searchHero} onChange={handleSearch} value={search} placeholder='hero name' />

            {search.length > 0 ?
                <div className='row heroCard'>
                    {
                        heroFilterResult.map((hero) => (
                            <Heroes
                                key={hero._id}
                                {...hero}
                            />))
                    }
                </div>
                : null
            }
        </div>
    )
}
