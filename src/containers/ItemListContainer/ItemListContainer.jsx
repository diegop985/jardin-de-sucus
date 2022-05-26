import React, { useState, useEffect } from 'react';
import { Item } from '../../components/Item/Item';
import { ItemCount } from '../../components/ItemCount/ItemCount';
import { ItemList } from '../../components/ItemList/ItemList';
import getFetch from '../../helpers/getFetch';
import './itemlistcontainer.css'



export const ItemListContainer = ({props, setProductosQty}) => {
    

    const [productos, setProductos] = useState([])

    useEffect(() => {
    
        getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
     
        }, [])
        
        
        console.log(productos)



    return (
        <>
            <h1>{props}</h1>
            {/* <ItemCount setProductosQty={setProductosQty}/> */}

            <ItemList propsItemList={productos}/>


        </>
    )
}