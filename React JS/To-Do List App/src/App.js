// npx json-server -p 3500 -w data/db.json 
// npx create-react-app Social_Media_Post_App
// cd file name
// npm start 





// Before Api topic....Codes are in App.txt file...
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useEffect, useState } from 'react'
import AddItem from "./AddItem"
import SearchItem from "./SearchItem"
import apiRequest from "./apiRequest"


 

function App() {

  const API_URL="http://localhost:3500/items"

    const [items,setItems]= useState([]);
    // const [items,setItems]= useState(JSON.parse(localStorage.getItem("todo_list")) || []);
  
    // const [items,setItems]= useState([]); 
// if it used "useEffect" used na indha comment aa paaruga..,, "



        const [newItem,setNewItem]=useState('') // Type pandra word aa oru varaible la vangaradhu ku use pandrathu.......
        
        const [search, setsearch]=useState("")


        // useEffect(()=>{
        //   console.log("Rendering")
        // },[])
       
        // console.log("Before.........")
        // useEffect(()=>{
        //   console.log("Rendering")
        // },[items])
        // console.log("After......")

        // useEffect(()=>{
        //   JSON.parse(localStorage.getItem("todo_list"))
        // },[])


        const [fetchError, setFetchError] = useState(null)
        const [isLoading,setIsLoading] = useState(true)

        
        useEffect(()=>{
          const fetchItems= async ()=>{
            try{
              const response= await fetch(API_URL)
              if(!response.ok) throw Error("Data not Received")
              console.log(response)
              const ListItems=await response.json()
              console.log(ListItems)
              setItems(ListItems)
              setFetchError(null)
            }
            catch(err){
              // console.log(err)
              // console.log(err.stack)
              setFetchError(err.message)
            }
            finally{
              setIsLoading(false)
            }
          }
          setTimeout(()=>{

          (async () => await fetchItems())()
          },2000)
        },[])

        const addItem = async (iteM) =>{
          const id= items.length ? items[items.length-1].id +1 : 1;

          const addNewItem={id,checked:false,iteM}
          const listItems=[...items,addNewItem]
          setItems(listItems)
          // localStorage.setItem("todo_list", JSON.stringify(listItems))
          
        // CRUD - create,Read....

        const postOptions= {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(addNewItem)
        }
          const result =await apiRequest(API_URL,postOptions);
          if(result) setFetchError(result)

        }

        // Update
        const handleCheck = async (ID) =>{
          const listItems= items.map((item)=>item.id===ID ? {...item, checked:!item.checked} : item)
          setItems(listItems)
          // localStorage.setItem("todo_list", JSON.stringify(listItems))

          const myItem=listItems.filter((item) => item.id===ID)
            
          const UpdateOptions= {
            method: "PATCH",
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({checked:myItem[0].checked})
          }
          const reqURL=`${API_URL}/${ID}`
            const result =await apiRequest(reqURL,UpdateOptions);
            if(result) setFetchError(result)

        }
  // Delete....
        const handleDelete =async (ID)=>{
          const listItems= items.filter((item)=>item.id!==ID)
          setItems(listItems)
          // localStorage.setItem("todo_list", JSON.stringify(listItems))    // THIS "setItem is different..."
          
          const deleteOptions={method:"DELETE"}
          const reqURL=`${API_URL}/${ID}`
          const result =await apiRequest(reqURL,deleteOptions);
          if(result) setFetchError(result)
        }
  
        const handleSubmit=(e)=>{
          e.preventDefault();
          // console.log("Submitted")
          if(!newItem) return;
          console.log(newItem)
          //Add
          addItem(newItem)
          setNewItem('')    //Comment this to see the changes....
          
        }
  return (
    <div className="App">
      <Header title='Course List or Todo-List ' /> 
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
      <SearchItem
        search={search}
        setSearch={setsearch}
      />
      <main>
        {isLoading && <p> Loading Items......</p>} 
        {fetchError && <p> {`Error: ${fetchError}`}
        </p>
        } 
      {
        !isLoading && !fetchError &&
      <Content
      items= {items.filter(item=>(item.iteM).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      }
      </main>
      <Footer
        lengtH = {items.length}/>
    </div>
  )

  }
export default App;


// Abstraction... => Small Small Logic ..=> Converting to "Components"............





