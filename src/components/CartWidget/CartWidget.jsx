import React, { useState, useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './cartwidget.css'

export const CartWidget = ({ productosQty }) => {
    console.log(productosQty)
    return (
        <>
            <button><AiOutlineShoppingCart/></button>
            <span>{productosQty}</span>
        </>
    )
};
