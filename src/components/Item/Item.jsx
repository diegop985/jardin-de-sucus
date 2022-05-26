import React from 'react'
import './item.css'




export const Item = ({propsItem}) => {

    let producto = propsItem


    return (

        <div className='item-container'>
            <div className='card-pt1'>
                <span>{producto.name}</span>
                <span>Cantidad: {producto.stock}</span>
            </div>
            <div className='card-pt2'>
                <img className='img-card' src={producto.foto}></img>
            </div>
            <div className='card-pt3'>
                <button className='cta-btn'>Ver Producto</button>
            </div>
        </div>

    )
}
