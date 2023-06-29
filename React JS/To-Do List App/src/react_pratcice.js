

// Upto React Click Events


// import React from 'react'


//   const Content = () => {
  
//     function handlenameChange(){
//       const names=["Earn","Grow","Give"];
//       const int= Math.floor(Math.random()*3);

//       return names[int];
//   }
//   const handleClick1= (e)=>{
//     console.log(e)
//   }
//   const handleClick2 = (name)=>{
//     console.log("Welcome to this Tutorial "+name)
//   }
//   const handleClick3 = (e)=>{
//     console.log(e.target)
//   }
//   const handleClick4 = (e)=>{
//     console.log(e.target.innerText);
//   }
//   const handleClicks = (name1)=>{
//     console.log("Most Welcome to this Tutorial " +name1)
//   }

 
//   return (
//     <main>
//     <p onClick={()=> handleClicks("Pravin")}> Let's {handlenameChange()} Money</p>

//     <button onClick= {(e)=> handleClick1(e)}>Subscribe1</button>

//     <button onClick= {()=> handleClick2("Pravin")}>Subscribe2</button>

//     <button onClick= {(e)=> handleClick3(e)}>Subscribe3</button>
//     <button onClick= {(e)=> handleClick4(e)}>Subscribe4</button>
//     </main>
//   )
// }
     
// export default Content;











// Adding or SUbtracting one values using SetState - Hook


import React from 'react'
import { useState } from 'react';

// useState= Array type....

  const Content = () => {
  
    function handlenameChange(){

      const names=["Earn","Grow","Give"];
      const int= Math.floor(Math.random()*3);

      return names[int];
  }

      // if (true){
    //   useState()
    // }
    // useState()
    // useState()
          // We should not call like this...Condition kulla use state kudakudathu....

    function namee(){
      return console.log("HI Velu")
    }

    const [count,setCount]= useState(99)
/*   const [name,setName]= useState(namee())         If we use like this automatic calling when page reloads and when clicking the buttons...So dont use this....instead of use like the below one...
*/
   const [name,setName]= useState(()=> namee());    // Itula First time dha varum....Buttons click pannu podhu ...Repeat aahadhu......
    
    /*
    function incrementFunction(){
      setCount(count+1)
      setCount(count+1)
      setCount(count+1)   // Output will be same in this condtion
    }

    function decreamentFunction(){
      setCount(count-1)
      setCount(count-1)
      setCount(count-1)  // Output will be same in this condtion
    }
    */

    // or

    /*
    function incrementFunction(){
      setCount((preCount)=> { return preCount+1})
      setCount((preCount)=> { return preCount+1})
      setCount((preCount)=> { return preCount+1})
        // In this the value will added to 3x high ...means precount +3
    }
    
    function decrementFunction(){
      setCount((preCount)=> { return preCount-1})
      setCount((preCount)=> { return preCount-1})
      setCount((preCount)=> { return preCount-1})
    }
    */
   
    function incrementFunction(){
      setCount((preCount)=> { return preCount+1})
    }   // Increases One value....
    function decrementFunction(){
      setCount((preCount)=> { return preCount-1})
    }   // Decrease One value Only


  return (
    <main>
    <p> Let's {handlenameChange()} Money</p>

    <button>Subscribe</button>
   
    <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction}>+</button>
    </main>
  )
}
     
export default Content;
















// React Hooks


// React Hooks

import React from 'react'
import { useState } from 'react';



  const Content = () => {
  
    
  // const [name,setName] = useState()   
  const [name,setName] = useState("Earn")
    
  
    function handlenameChange(){
      const names=["Earn","Grow","Give"];
      const int= Math.floor(Math.random()*3);
      setName(names[int])
  }



    return (
      <main>
        <p> Let's {name} Money</p>
        <button onClick={handlenameChange}>Subscribe</button>
      </main>
    )
}
     
export default Content;







