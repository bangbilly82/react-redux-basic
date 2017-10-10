import React, { Component } from 'react';

class CommentBox extends Component{

    constructor(props){
        super(props);
        this.submitComment = this.submitComment.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleText = this.handleText.bind(this);
        this.state = {
            author: '',
            text: ''
        }
    }

    submitComment(e){
        e.preventDefault();
        let { author, text } = this.state;
        let comment = {
            author,
            text
        }
        this.props.addComment(comment);
    }

    handleAuthor(e){
        this.setState({
            author: e.target.value
        })
    }

    handleText(e){
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return(
            <div className="comment-box">
                <form onSubmit={this.submitComment}>
                    <div>
                        <label>Your Name</label>
                        <input type="text" onChange={this.handleAuthor}/>
                    </div>
                    <br/>
                    <div>
                        <label>Comment</label>
                        <textarea onChange={this.handleText}/>
                    </div>
                    <br/>
                    <button type="submit">Send Comment</button>
                </form>
            </div>
        )
    }
}

export default CommentBox;
