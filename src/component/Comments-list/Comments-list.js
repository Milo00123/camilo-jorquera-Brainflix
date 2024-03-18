import jsonData from '../../data/video-details.json'
import './Comments-list.scss'
import { useState } from 'react';

 
function CommentsList({comments}){

    

    const convertToDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-US', { 
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
           
        });

    
      };

    return(<>
    {comments.map((commentVideo) => {
        return(
            <div className="comments-list--container"  key={commentVideo.id}>
            <div className="comment-wrap" >
                <div className="comment-avatar"></div>
            
                <div className="inner-comment-container">
                    <div className="inner-inner--container">
                        <p className="name-comment--list" >{commentVideo.name}</p>
                        <p className="date-comment--list">{convertToDate(commentVideo.timestamp)}</p>
                    </div>
                    <p className="comment-comment--list">{commentVideo.comment}</p>
                </div>
            </div>
            
            
            </div>

        )
    })}
   

   

</> );
}

export default CommentsList 