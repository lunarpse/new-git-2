import React, { useContext, useEffect, useState } from 'react'
import Listitem from './Listitem'
import Addtodo from './Addtodo'
import { Appcontext } from '../context/Appcontext'

const Todo = () => {
  
  const [show,setshow]=useState(false)
  
  const [del,setdel]=useState(false)
  
  const {state,dispatch}=useContext(Appcontext);


  const [lists,setlist]=useState([])
  
  setlist([])


  useEffect(()=>{
    setlist(state)
  },[state])
 
  const addtolist=(data)=>{
    const newdata={
      id:lists.length,
      data
    }
   
    dispatch({type:"ADD",payload:newdata})
  }

  const deleteid=(id)=>{
    dispatch({type:"DELETE",payload:id})
    setdel(true)
    setTimeout(()=>setdel(false),900) 
  }

  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
      <div>
    {del && <span>Data deleted successfully</span>}


    {show && <Listitem items={lists} deleteid={deleteid}/>}
    <button onClick={()=>setshow(prev=>!prev)}>{show?<span>Hide List</span>:<span>Show List</span>}</button>


    </div>
    <div>
    <Addtodo addtolist={addtolist}/>
    </div>
    </div>
  )
}

export default Todo