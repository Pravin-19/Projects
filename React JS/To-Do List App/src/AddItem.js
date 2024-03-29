import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'


const AddItem = ({newItem,setNewItem,handleSubmit}) => {

        const inputRef= useRef()
    return (
   <form className='addForm' onSubmit={handleSubmit}>      
    <label htmlFor="addItem">Add Item</label>
    <input 
        autoFocus
        type="text"
        placeholder='Add Item'
        required
        ref={inputRef}
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
           type='submit' 
           aria-label='Add Item'
           onClick={()=>inputRef.current.focus()}       // See the changes by clicking the "plus" button
        >
            <FaPlus/>
        </button>
     </form>
  )
}

export default AddItem

//form default.....Submit pannu podhu page reload aahum....
