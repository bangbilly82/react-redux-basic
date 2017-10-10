import React, { Component } from 'react';

class TodosItem extends Component{
    render() {
      const { todo } = this.props;
        return(
          <li className={(todo.completed ? 'done' : 'undone')}>
            <h6>{todo.created_at}</h6>
            <p>{todo.text}</p>
            <span onClick={() => this.props.deleteTodo(todo.id, todo.text)}>x</span>
            <small onClick={() => this.props.toggleTodo(todo.id)}>Mark as Done</small>
          </li>
        )
    }
}

export default TodosItem;
