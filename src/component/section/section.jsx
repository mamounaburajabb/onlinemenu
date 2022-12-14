import React from 'react'
import { Link } from 'react-router-dom'
import './section.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Navbar from '../navBar/navBar';
const Section = () => {
    const [style, setStyle] = useState(false);


    return (
        <div className='SECTION-BAR'>

            <div id='section' className='btn-group' >
                <Link to={'/all'} id="btn" className="btn btn-outline-dark" >All</Link>
                <Link to={'/drink'} id="btn" className="btn btn-outline-dark" >DRINKS</Link>
                <Link to={'/salad'} id="btn" className="btn btn-outline-dark" >SALADS</Link>
                <Link to={'/pasta'} id="btn" className="btn btn-outline-dark">PASTA</Link>
                <Link to={'/burgers'} id="btn" className="btn btn-outline-dark">BURGERS</Link>
                <Link to={'/pizza'} id="btn" className="btn btn-outline-dark">PIZZAS</Link>
            </div>
        </div>
    )
}

export default Section