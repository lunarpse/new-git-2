
const Reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,action.payload]
        case "DELETE":
            return state.filter(data=>data.id!==action.payload);
        default:
            return state
    }
}

export default Reducer;