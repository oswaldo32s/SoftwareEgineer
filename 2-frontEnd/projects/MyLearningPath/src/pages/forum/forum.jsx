import React from 'react';
import Comments from './comments';
import { CommentData } from './commentData';

function Forum () {
    return (
    <section className='forum'>
        <h1>Comment Section | Forum</h1>
        {
        CommentData.map(comment => 
            <Comments CommentObject={comment}/>
        )}
    </section>
    );
}

export default Forum;