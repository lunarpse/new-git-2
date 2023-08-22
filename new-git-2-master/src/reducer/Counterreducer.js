
const Counterreducer = (state=0,action) => {
    switch(action.type){
        case "INCREMENT":
            return state+10
        case "DECREMENT":
            return state-5<0?0 :state-5
        default:
            return state
    }

}

export default Counterreducer