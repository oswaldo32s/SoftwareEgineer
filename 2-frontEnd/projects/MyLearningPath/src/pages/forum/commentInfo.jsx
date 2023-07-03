import React from "react";

function CommentInfo (props) {

    return (
        <div className='comment-info'>
            <img src={props.profileImg} alt={props.username} />
            <h1>{props.username}</h1>
        </div>
    )

}

export default CommentInfo;