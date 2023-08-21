import React from "react";


class Addtodo extends React.Component{
    constructor(){
        super();
        this.state={
            data:"",
            show:true,
            added:false
        }
    }

    handle(){
        if(this.state.show){
            this.props.addtolist(this.state.data);
            this.setState({show:false})
            this.setState({added:true})
            setTimeout(()=>this.setState({added:false}),900)
        }
        else{
            this.setState({show:true})
        }
    }
    
    render(){
    return <>
    <div>
    {this.state.added && <span>Element added successfully</span>}
    </div>
    {this.state.show && <input type="text" onChange={(e)=>{
        e.preventDefault();
        this.setState({data:e.target.value})}}/>}
    <button onClick={()=>this.handle()}>{this.state.show?<span>Add</span>:<span>Add To List</span>}</button>
    </>
    }
}
export default Addtodo;