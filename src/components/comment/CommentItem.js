import React, { Component } from 'react';

class CommentItem extends Component{
    render() {
        return(
            <li>
                {this.props.children}
                <p>{this.props.comments.author}</p>
            </li>
        )
    }
}

export default CommentItem;
