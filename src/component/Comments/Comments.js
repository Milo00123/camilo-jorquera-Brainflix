import './Comments.scss';
import CommentsList from '../Comments-list/Comments-list'
import likeIcon from '../../assets/Icons/likes.svg';
import viewIcon from '../../assets/Icons/views.svg';;

function Comments ({videoData}){
  const date = new Date (videoData.timestamp);

    const formatDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })
 return( <>
 

<div className='video-description--wrap'>
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
  <label htmlFor="user-name">JOIN THE CONVERSATION</label><br />
  
  <textarea id="comment-area" placeholder="Add a new comment" name="person-comment"></textarea><br />
  <button type="submit">COMMENT</button>
</div>   
      </form>

      <CommentsList  comments={videoData.comments} />
  
</>)
}

export default Comments