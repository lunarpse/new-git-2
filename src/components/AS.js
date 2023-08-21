import React, { useReducer } from 'react'
import Counterreducer from '../reducer/Counterreducer'

const AS = () => {
    const [state,dispatch]=useReducer(Counterreducer,10)
    const increment=()=>{
        dispatch({type:"INCREMENT"})
    }

  return (
    <div>
        <button onClick={()=>increment()}>+</button>
        <p>{state}</p>
    </div>
  )
}

export default AS