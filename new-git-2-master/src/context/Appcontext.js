import { createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";

export const Appcontext=createContext();

export const Appprovider=({children})=>{
    const [state,dispatch]=useReducer(Reducer,[]);
    

    return <Appcontext.Provider value={{state,dispatch}}>
        {children}
    </Appcontext.Provider>
}

