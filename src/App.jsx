import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import React, { useState, useEffect } from 'react';


export const App = () => {

  const [productosQty, setProductosQty] = useState(0)  

  return (
    <div className="App">
      <NavBar productosQty={productosQty}  />
      <ItemListContainer props="Bienvenidos al Jardín de Suculentas" setProductosQty = {setProductosQty}/>
    </div>
  );
}


