import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Product from '../Components/data.json'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Products prod={Product}/>
    </div>
  )
}

export default Home