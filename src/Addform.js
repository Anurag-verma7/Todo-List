import React, { Component } from 'react'
class Addform extends Component{
    state ={
        content : ''
    }
    handleChange = (e) =>{
        this.setState(
            {
                content :e.target.value
            }
        )
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.passthis(this.state)
        this.setState(
            {
                content :''
            }
        )
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label ><em>Add the tasks</em></label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
            </div>

        )
    }
}
export default Addform