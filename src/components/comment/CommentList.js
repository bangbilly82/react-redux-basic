import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component{
    render() {
        let { comments } = this.props;
        let commentItem = comments.map(comment => {
            return(
                <CommentItem key={comment.id} comments={comment}/>
            )
        }) 
        return(
            <div className="comment-list">
                {commentItem}
            </div>
        )
    }
}

export default CommentList;
