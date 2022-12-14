import React, { useState } from 'react'
import './allMales.css'
import Section from '../../component/section/section'
import { Pizza } from '../../assets/data/pizzas'
import { Burgers } from '../../assets/data/burgers'
import { Drinks } from '../../assets/data/drinks'
import { Pasta } from '../../assets/data/pasta'
import { Salads } from '../../assets/data/salads'
import Header from '../../component/header/header'
import { useEffect } from 'react'
const AllMales = () => {
    let Data = [...Burgers, ...Pasta, ...Drinks, ...Pizza, ...Salads];
    const [male, setMale] = useState(Data);
    useEffect(() => {
    }
        , []);
    return (

        <div className='allMales'>
            <Header />
            <Section />

            <div className='all'>
                {male.map(item =>
                    <div
                        key={item.id}
                        data={item}
                        className='males'>
                        <img src={item.image}
                            id="image" alt="pizza" />
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

export default AllMales