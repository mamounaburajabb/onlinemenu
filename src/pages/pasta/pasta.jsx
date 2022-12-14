import React, { useState } from 'react'
import './pasta.css'
import Section from '../../component/section/section'
import { Pasta } from '../../assets/data/pasta'
import Header from '../../component/header/header'
const Pastas = () => {

    return (
        <div className='allMales'>
            <Header />
            <Section />
            <div className='all'>
                {Pasta.map(item =>
                    <div
                        key={item.id}
                        data={item}
                        className='males'>
                        <img src={item.image}
                            className="image" alt="pizza" />
                        <div
                            className='header'>
                            <button
                                className='name-price'>
                                <h3>{item.name}</h3>
                                <span className='price'>{item.price}</span>
                            </button>
                            <span className='hLine'></span>
                            <div>
                                <p className='description'>{item.descriptionMale}</p>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Pastas