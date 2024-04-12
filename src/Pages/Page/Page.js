import React from 'react'
import './Page.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import publishIcon from '../../assets/Icons/publish.svg';
import videoImage from '../../assets/Images/Upload-video-preview.jpg';


function Page() {

   const navigate = useNavigate();

   const [formSubmited, setFormsubmited] = useState(false)


   const handleSubmit = (event) =>{
      event.preventDefault();
      setFormsubmited(true);

      setTimeout(() => {
         navigate('/');
       }, 3000)

      
   }
   if(formSubmited){
      return <div className='form-message-container'>
         <h1 className='form-message'>VIDEO UPLOADED!</h1>
         <p className=''>😎👍</p>
      <h1 className='form-message'>Redirecting to Home Page...</h1></div> 
   
   }







  return (<>
    
    <h1 className='title-page-upload'>Upload Video</h1>
    <form className='page-form' onSubmit={handleSubmit}>
        <div className='page-video--container'> 
             <label>VIDEO THUMBNAIL</label>        
             <video className='page-video' poster={videoImage} controls/>
       </div> 
       <div className='page-textarea--container'>
          <label>TITLE YOUR VIDEO</label>
             <input type='text' placeholder='Add a title to your video'></input>
              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea className='page-textarea' placeholder='Add a description to your video'></textarea>
        
       <div className='page-buttons--container'>
         <div className='publish-button-container'>
            <img src={publishIcon} className='publish-icon'></img>
              <button className='page-button publish-button'>PUBLISH</button>
              </div>
             <button className='page-button cancel-button' disabled>CANCEL</button>
        </div>
       </div>
    </form>

 </> )
}

export default Page