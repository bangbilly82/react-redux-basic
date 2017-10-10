import React, { Component } from 'react';
import TodosItem from './TodosItem';
import './TodoItem.css';

class TodosList extends Component{

    checkEmpty () {
      return (
        <span>No Todos !</span>
      )
    }

    toggleTodo (id) {
      this.props.toggleTodo(id);
    }

    deleteTodo (id, text) {
      this.props.deleteTodo(id)
    }

    render() {
        let { todos } = this.props;
        let todosItem;
        const countTodos = todos.length;
        // const completedTodo = todo.filter(t => {

        // })
        if (todos.length > 0) {
          todosItem = todos.map(todo => {
            return(
              <TodosItem 
                key={todo.id} 
                todo={todo}
                deleteTodo={this.deleteTodo.bind(this)} 
                toggleTodo={this.toggleTodo.bind(this)}/>
            )
          }) 
        }
        else {
          todosItem = this.checkEmpty(); 
        }
        return(
            <div className="todos-list">
              <h6 className="todos-status">List of Todos ({countTodos}) | Completed (0) | Ongoing ({countTodos})</h6>
              <ul>
                {todosItem}
              </ul>
            </div>
        )
    }
}

export default TodosList;
