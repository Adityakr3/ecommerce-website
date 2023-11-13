import React from 'react'
import Navbar from '../features/navbar/Navbar'
import { ProductList } from '../features/productList/ProductList'

const HomePage = () => {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default HomePage
