import React, { Component } from 'react';
import Todos from './Todos';
import Addform from './Addform'
class App extends Component {
  state ={
    todos : [
      {id: 1 ,content: 'study ds'},
      {id: 2, content: 'study react'}
    ]
  }
  deleteTodo = (id) => {
      const z = this.state.todos.filter(x=>{
        return x.id!==id
      })
      this.setState({
        todos : z
      })
  }
  addit = (y) =>{
      y.id =Math.random()
      let z = [...this.state.todos,y]
      this.setState(
        {
          todos : z
        }
      )

  }
 render(){
  return (
    <div className= "todo-app container #f3e5f5 purple lighten-5">
    <h1 className=" center red-text ">Todo's</h1>
    <p>    <pre>   click to remove the task....</pre></p>
    <Todos todos={ this.state.todos} deleteTodo={this.deleteTodo} />
    <Addform passthis={this.addit} />
    </div>
  );
}
}
export default App;
