import React from 'react'

import {
    BrowserRouter as Router,  
    Route,
 
    Routes
} from "react-router-dom";
import { GetAllHeroes } from '../components/GetAllHeroes';
import { Main } from '../components/Main';
import { Nav } from '../components/Nav'
import { SearchHero } from '../components/SearchHero';

export const AppRoute = () => {
    return (

        
            <Router>
                <div>                    
                  <Nav />
                    
                    <Routes>
                        <Route exact path="/heroes" element={<GetAllHeroes />}> </Route>
                        <Route  exact path='/search' element={<SearchHero />}></Route>
                        <Route exact path='/' element={<Main/>}> </Route>
                        
                    </Routes>
                </div>
            </Router>
        
    )
}
