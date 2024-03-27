import React from 'react'
import './Page.scss';

function Page() {
  return (<>
    
    <h1 className='title-page-upload'>Upload Video</h1>
    <form className='page-form'>
        <div className='page-video--container'> 
             <label>VIDEO THUMBNAIL</label>        
             <video className='page-video' controls/>
       </div> 
       <div className='page-textarea--container'>
          <label>TITLE YOUR VIDEO</label>
             <input type='text' placeholder='Add a title to your video'></input>
              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea className='page-textarea' placeholder='Add a description to your video'></textarea>
        
       <div className='page-buttons--container'>
              <button className='page-button'>PUBLISH</button>
             <button className='page-button cancel-button'>CANCEL</button>
        </div>
       </div>
    </form>

 </> )
}

export default Page