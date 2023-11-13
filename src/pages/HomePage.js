import React from 'react'
import Navbar from '../features/navbar/Navbar'
import { ProductList } from '../features/productList/ProductList'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <ProductList/>
    </div>
  )
}

export default HomePage
