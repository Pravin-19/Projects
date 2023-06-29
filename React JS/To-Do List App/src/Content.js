// Practice code are in React_practice file...
// check out that...



// React List & Keys.....

import React from "react";
import ItemsList from "./ItemsList";


const Content = ({items,handleCheck,handleDelete}) => {

  return (

   <>   

    {(items.length) ? (
      <ItemsList 
        items= {items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      ) : (<p style={{marginTop:'2rem'}}>Your List is Empty</p>)
      }
   </>    // Fragments
  )
}

export default Content