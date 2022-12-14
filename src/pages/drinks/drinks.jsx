import React, { useState } from 'react'
import './drinks.css'
import Section from '../../component/section/section'
import { Drinks } from '../../assets/data/drinks'

import Header from '../../component/header/header'
const Drink = () => {
    let Data = [Drinks];
    // const [drinkss, setDrinks] = useState(Data);
    return (
        <div className='allMales'>
            <Header />

            <Section />
            <div className='all'>
                {Drinks.map(item =>
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

export default Drink