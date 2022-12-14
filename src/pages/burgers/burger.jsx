import React, { useState } from 'react'
import './burger.css'
import Section from '../../component/section/section'
import Header from '../../component/header/header'
import { Burgers } from '../../assets/data/burgers'
const Burger = () => {

    return (
        <div className='allMales'>
            <Header />

            <Section />
            <div className='all'>
                {Burgers.map(item =>
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

export default Burger