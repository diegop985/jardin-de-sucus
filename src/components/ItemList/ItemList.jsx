import React from 'react'
import { Item } from '../Item/Item'
import './itemlist.css'





export const ItemList = ({propsItemList}) => {

  let produtos = propsItemList

  console.log(produtos)


    return (

    <div className="itemList">
      {
        produtos.map( producto => <Item key={producto.id} propsItem={producto}/> )
      }
    </div>

    )
}
