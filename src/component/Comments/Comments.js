import './Comments.scss';
import CommentsList from '../Comments-list/Comments-list'
import likeIcon from '../../assets/Icons/likes.svg';
import viewIcon from '../../assets/Icons/views.svg';
import addComment from '../../assets/Icons/add_comment.svg';

function Comments ({videoData}){
  const date = new Date (videoData.timestamp);

    const formatDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })
 return( <>
 

<div className='video-description--wrap' key={videoData.id}>
          <h1 className='video-title'>{videoData.title}</h1>
           <div className='main-container'>
             <div className="channel-timestamp--container">
                    <p className="p-bold">By {videoData.channel}</p>
                   <span>{formatDate}</span>
              </div>
                 <div className="views-likes--container">
                    <div className='views-container'>
                        <img src={viewIcon}  alt="Icon Description" />
                         <p className='p-views'>{videoData.views}</p>
                   </div>
                   <div className='likes-container'>
                         <img src={likeIcon}alt="Icon Description"/>
                         <p className='p-likes'>{videoData.likes}</p>
                     </div>
        
                  </div>
          </div>
                 <p className="main-video-description">{videoData.description}</p>

       </div>



<form>
<img className='icon-logo'/> 

<div className="form-container">
  <div className='label-textarea-container'>
  <label htmlFor="user-name">JOIN THE CONVERSATION</label><br />
  <textarea id="comment-area" placeholder="Add a new comment" name="person-comment"></textarea><br />
  </div>
  <div className='container-button-comment'>
    <img src={addComment} className='add-comment-icon'></img>
     <button type="submit">COMMENT</button>
  </div>
</div>   
      </form>

      <CommentsList  comments={videoData.comments} />
  
</>)
}

export default Comments