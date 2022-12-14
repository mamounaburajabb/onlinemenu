import React, { useState } from 'react'
import './pizza.css'
import Section from '../../component/section/section'
import { Pizza } from '../../assets/data/pizzas'
import Header from '../../component/header/header'

const Pizzas = () => {
    return (
        <div className='allMales'>
            <Header />
            <Section />
            <div className='all'>
                {Pizza.map(item =>
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
                                <span className='price'>${item.price}</span>
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

export default Pizzas