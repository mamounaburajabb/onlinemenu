import React, { useState } from 'react'
import './salad.css'
import Section from '../../component/section/section'
import { Salads } from '../../assets/data/salads'
import Header from '../../component/header/header'
const Salad = () => {
    return (
        <div className='allMales'>
            <Header />
            <Section />
            <div className='all'>
                {Salads.map(item =>
                    <div
                        key={item.id}
                        data={item}
                        className='males'>
                        <img src={item.image}
                            className="image" alt="pizza" />
                        <button
                            className='header'>
                            <div
                                className='name-price'>
                                <h3>{item.name}</h3>
                                <span className='price'>{item.price}</span>
                            </div>
                            <span className='hLine'></span>
                            <div>
                                <p className='description'>{item.descriptionMale}</p>
                            </div>
                        </button>
                    </div>)}
            </div>
        </div>
    )
}

export default Salad