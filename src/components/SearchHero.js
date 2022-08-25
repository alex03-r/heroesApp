import React, { useEffect, useState } from 'react'

import { Heroes } from './Heroes'

export const SearchHero = () => {


    const [search, setsearch] = useState('')
    const [filterHero, setfilterHero] = useState([])

    const getHeroByName = async () => {
        const response = await fetch('http://localhost:4000/api')
        const { allHeroes } = await response.json()
        setfilterHero(allHeroes)
    }

    useEffect(() => {
        getHeroByName()

    }, [])

    const handleSearch = (e) => {
        setsearch(e.target.value)
    }

    const [heroFilterResult, setHeroFilterResult] = useState([])

    const loopFor = () => {

        const filterResult = filterHero.filter(hero => hero.superHero.toLowerCase().includes(search.toLowerCase()))

        console.log(filterResult)
        setHeroFilterResult(filterResult)
    }

    return (

        <div className='containerSearch'>

            <h1>Search Hero</h1>
            <input type='text' className='form-control' onKeyUp={loopFor} onChange={handleSearch} value={search} placeholder='hero name' />

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
