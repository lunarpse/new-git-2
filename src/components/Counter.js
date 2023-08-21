import React, { useReducer } from 'react'
import Counterreducer from '../reducer/Counterreducer'

const Counter = () => {
    const [state,dispatch]=useReducer(Counterreducer,0)
    const increment=()=>{
        dispatch({type:"INCREMENT"})
    }
    const decrement=()=>{
        dispatch({type:"DECREMENT"})
    }

  return (
    <div>
        <button onClick={()=>increment()}>+</button>
        <p>{state}</p>
        <button onClick={()=>decrement()}>-</button>
    </div>
  )
}

export default Counter