import * as Actions from '../actions/Actions';

export function addComment(comment){
    return {
        type: Actions.ADD_COMMENT,
        comment
    }
}

export function deleteComment(id){
    return {
        type: Actions.DELETE_COMMENT,
        id
    }
}