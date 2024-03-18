import './Comments.scss';
import CommentsList from '../Comments-list/Comments-list';

function Comments ({videoData}){
 return( <>

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