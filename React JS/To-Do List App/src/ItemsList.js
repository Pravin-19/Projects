import React from 'react'
import LineItem from './LineItem';

const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
        {items.map((item)=>(
          <LineItem 
          item= {item}
          key={item.id}     // Important .... aana Line item receive aahum nu avasiyam illa
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        ))}  
      </ul>
  )
}

export default ItemsList