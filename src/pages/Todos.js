import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../action-creators/Todos';
import TodosForm from '../components/todos/TodosForm';
import TodosList from '../components/todos/TodosList';

class Todos extends Component {

  addTodo (value) {
    this.props.addTodo(value);
  }

  toggleTodo(id) {
    this.props.toggleTodo(id);
  }

  deleteTodo(id) {
    this.props.deleteTodo(id);
  }

  render() {
    const { todos } = this.props; 
      return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-md-offset-1'>
            <h2 className="todos-heading">Simple Todo App</h2>
            <hr />
            <TodosForm addTodo={this.addTodo.bind(this)}/>
            <div className='row'>
              <div className='col-md-12'>
              <TodosList todos={todos} toggleTodo={this.toggleTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer,
    visibilty: state.visibilityReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => {
      dispatch(actionCreator.toggleTodo(id))
    },
    addTodo: text => {
      dispatch(actionCreator.addTodo(text))
    },
    deleteTodo: id => {
      dispatch(actionCreator.deleteTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
