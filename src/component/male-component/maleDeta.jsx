import React from 'react';
import Header from '../header/header';
import './maleD.css'

const MealDetails = () => {
    return (
        <div className='detals'>
            <Header/>
            <div className='Det'>
                <div className=''>
                    <img
                        className='imageMeal'
                        src="https://images.pexels.com/photos/1694865/pexels-photo-1694865.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className='mealInfo'>
                    <h1>pizza</h1>
                    <h6>25$</h6>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim velit quis, beatae maiores est voluptates ipsam dicta nam aspernatur facilis illo, temporibus maxime non ad eaque doloribus eos. Voluptas, rerum.</p>
                    <label htmlFor=""></label>
                    <input type="checkbox" name="" id="" />
                    <input type="number" name="" id="" />
                    <button type="submit">Order</button>
                </div>
            </div>
        </div>
    )
}

export default MealDetails
