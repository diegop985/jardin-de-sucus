import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css'

export const ItemListContainer = ({props}) => {
    
    let titulo = props
    console.log(titulo)
    return (
        <>
            <h1>{titulo}</h1>
        </>
    )
}