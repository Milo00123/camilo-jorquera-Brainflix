import React from 'react'
import './Page.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import publishIcon from '../../assets/Icons/publish.svg';
import videoImage from '../../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';


function Page() {

   const navigate = useNavigate();
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [formSubmited, setFormsubmited] = useState(false)


   const handleSubmit = (event) =>{
      event.preventDefault();
      const videoData ={
         title,
         description: 'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. This video will focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves.',
         image:'http://localhost:8080/images/upload-video.jpg',
         channel: 'Super Camilo', 
         views: '0',  
         likes: '0',  
         duration: '00:00',
         video: '',
         timestamp: Date.now(),
         comments: [ 
            {
               "id": "2d818087-c1f4-4ec2-b5dc-b545fd6ec258",
               "name": "chewbacca",
               "comment": "waahahhwahaaaaaagggrrgrrrrr",
               "likes": 10003393092,
               "timestamp": new Date()
             },
             {
               "id": "2d818087-c1f4-4ec2-bcdc-b545fd6ec258",
               "name": "obi wan kenobi",
               "comment": "may the force be with you",
               "likes": 10003393092,
               "timestamp": new Date()
             },
            
         ]  
      }
      axios.post('http://localhost:8080/videos', videoData)
      .then(response =>{
         setFormsubmited(true);

      setTimeout(() => {
         navigate('/');
       }, 3000)

      }).catch(error =>{
         console.error('upload failed', error)
      });    
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
             <input type='text' placeholder='Add a title to your video' value={title} onChange={e =>setTitle(e.target.value)}></input>
              <label>ADD A VIDEO DESCRIPTION</label>
              <textarea className='page-textarea' placeholder='Add a description to your video' value={description} onChange={e => setDescription(e.target.value)} ></textarea>
        
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