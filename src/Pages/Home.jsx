import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Product from '../Components/data.json'
import Content from './Content'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Products prod={Product}/>
      <Content/>
    </div>
  )
}

export default Home