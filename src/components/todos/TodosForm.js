import React, { Component } from 'react';

class TodosForm extends Component{

    constructor(props){
        super(props);
        this.handleTodoText = this.handleTodoText.bind(this);
        this.state = {
            text: '',
            errorStatus: false
        }
    }

    handleTodoText(e){
        this.setState({
            text: e.target.value
        })
    }

    dispatchTodo(e) {
      e.preventDefault();
      const { text } = this.state;
      if(text === '') {
          this.setState({
              errorStatus: true
          })
      } else {
        this.setState({
            text: '',
            errorStatus: false
          })
        this.props.addTodo(text);
      }
    }

    render() {
        const { text, errorStatus } = this.state;
        return(
            <div className="todos-box">
                <form onSubmit={this.dispatchTodo.bind(this)}>
                    <div className={"input-group " + (errorStatus ? 'has-error' : '')}>
                        <input type="text" className={'form-control'} onChange={this.handleTodoText} value={text} placeholder="Add New Todo"/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.dispatchTodo.bind(this)}>Add Todo</button>
                        </span>
                    </div>
                </form>
                <span className={"help-block " + (errorStatus ? '' : 'hidden')}>Input must not be empty</span>
                <br/>
            </div>
        )
    }
}

export default TodosForm;
