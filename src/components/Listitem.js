import React from 'react'
import {BsTrash} from "react-icons/bs";

const Listitem = ({items,deleteid}) => {
    console.log(items)
    let content=<p>List is empty</p>
    if(items.length!==0){
        content=<p>
            {items.map(list=>{
            return (
                <div >
                    <p>{list.data}   <BsTrash onClick={()=>deleteid(list.id)}/></p>
                   
                </div>
            )
        })}
        </p>
    }
  return content
}

export default Listitem