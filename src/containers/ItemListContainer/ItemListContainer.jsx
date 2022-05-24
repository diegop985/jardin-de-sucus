import React, { useState, useEffect } from 'react';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import getFetch from '../../helpers/getFetch';
import './itemlistcontainer.css'



export const ItemListContainer = ({props, setProductosQty}) => {
    

    const [productos, setProductos] = useState([])

    useEffect(() => {
    
        getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
     
    }, [])
    


    let titulo = props
    console.log(titulo)
    return (
        <>
            <h1>{titulo}</h1>
            <ItemCount setProductosQty={setProductosQty}/>
        </>
    )
}