import React, { Component } from 'react';
import CommentList from '../components/comment/CommentList';
import CommentBox from '../components/comment/CommentBox';

class Comment extends Component{
    render() {
        let { comment } = this.props;
        return(
            <div className="comment-page">
                <ul>
                    <CommentList comments={comment}/>
                </ul>
                <hr/>
                <CommentBox addComment={this.props.dispatchComment}/>
            </div>
        )
    }
}

export default Comment;
