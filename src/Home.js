import React from 'react'
import {Link} from 'react-router-dom'
// import * as yup from 'yup'
// import axios from 'axios'
import './App.css'

const Home = () => {
    return (

        <div className="Homepage">
            <h1>Lambda Eats</h1>
            <p>We pride ourselve in medioce, but EXPENSIVE pizza. Delivery times average around 3-4 weeks. Hope you're not tooooo hungry.</p>
            <div className="order-btn">
            <Link to="/pizza" className="orderBtn">Order Now!</Link>
            </div>
        </div>
    )
    
}

export default Home