import React from 'react';
import Headerbanner from "./Bannersection/Headerbanner";
import Header from './Components/Header';
import ProductScreen from './Products/ProductScreen';

function App() {
  return (
    
      <div>
        <Header />
        <Headerbanner/>
        <ProductScreen/>
      </div>
  );
}

export default App;
