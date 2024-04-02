import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Product from '../Components/data.json'
import Content from './Content'
import Others from './Others'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Products prod={Product}/>
      <Content/>
      <Others/>
    </div>
  )
}

export default Home