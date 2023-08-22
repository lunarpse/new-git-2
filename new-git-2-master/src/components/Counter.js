import React, { useReducer } from 'react'
import Counterreducer from '../reducer/Counterreducer'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch=useDispatch()
    const increment=()=>{
        dispatch({type:"INCREMENT"})
    }
    const decrement=()=>{
        dispatch({type:"DECREMENT"})
    }
    
    const state=useSelector(state=>state.counter)
  console.log(state)

  return (
    <div>
        <button onClick={()=>increment()}>+</button>
        <p>{state}</p>
        <button onClick={()=>decrement()}>-</button>
    </div>
  )
}

export default Counter