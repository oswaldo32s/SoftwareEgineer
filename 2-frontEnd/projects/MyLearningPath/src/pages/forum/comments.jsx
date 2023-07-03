import React from "react";
import CommentInfo from "./commentInfo";
import CommentText from "./commentText";
import { CommentData } from "./commentData";

function Comments (props) {
    
    return(
        <article className="comment">
            <CommentInfo profileImg={props.CommentObject.profileImg} username={props.CommentObject.username} />
            <CommentText comment={props.CommentObject.comment}/>
        </article>
    )
}

export default Comments;