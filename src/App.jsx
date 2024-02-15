import { useState } from 'react'
import './App.css'
import ProductsScreen from './Components/ProductsScreen'
import Cart from './Components/Cart'

function App() {
  

  return (
    <>
      <div>
        <ProductsScreen/>
        <Cart/>
      </div>
    </>
  )
}

export default App
