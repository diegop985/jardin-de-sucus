import React, { useState, useEffect } from 'react';
import './itemcount.css'

export const ItemCount = ({ setProductosQty }) => {


    const [itemcount, setItemcount] = useState({ 
        toAdd : 0,
        stock : 8,

     })  


    const handleAdd = () => {

        if ( itemcount.stock>0 ) {
            setItemcount( {toAdd: itemcount.toAdd+1, stock: itemcount.stock-1} )
        }
    }
    
    const handleSubstract = () => {

        if ( itemcount.toAdd > 0 )
        setItemcount( {toAdd: itemcount.toAdd-1, stock: itemcount.stock+1} )
    }

    const handleAddToCart = () => {
        setProductosQty( productsQty => productsQty+itemcount.toAdd )
        setItemcount( {toAdd: 0, stock: itemcount.stock} )
    }

    return (

        <div>
            <br/><h2>Hola, soy un Item Count :)</h2>

            <div className='itemcount-cont'>
                <div className='showItems'>
                    <p>Producto</p>
                    <p>Cantidad: {itemcount.stock}</p>
                </div>
                <div className='handleQtys'>
                    <button onClick={() => handleSubstract()}>-</button>

                    <p> {itemcount.toAdd}</p>

                    <button onClick={() => handleAdd()}>+</button>
                </div>

                <button className='addToCar' onClick={() => handleAddToCart()}>Agregar al Carrito</button>

            </div>

        </div>

    )
}
