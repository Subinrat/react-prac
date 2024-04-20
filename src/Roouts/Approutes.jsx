import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "../Pages/Home"
import About from "../Pages/About"

const Approutes = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/About' element={<About />}></Route>
                </Routes>

            </Router>
            </BrowserRouter>


        </div>
    )
}

export default Approutes
