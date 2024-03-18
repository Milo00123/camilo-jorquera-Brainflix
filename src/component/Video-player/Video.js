import './Video.scss';
import likeIcon from '../../assets/Icons/likes.svg';
import viewIcon from '../../assets/Icons/views.svg';

function Video(props){
    const videoDetails = props.videoData;

    const date = new Date (videoDetails.timestamp);

    const formatDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    })



    return(<>
    <section className="video">
            <video width={'100%'}  height={'200px'} poster={videoDetails.image} controls/>
       <div className='video-description--wrap'>
          <h1>{videoDetails.title}</h1>
           <div className='main-container'>
             <div className="channel-timestamp--container">
                    <p className="p-bold">By {videoDetails.channel}</p>
                   <span>{formatDate}</span>
              </div>
                 <div className="views-likes--container">
                      <img src={viewIcon}  alt="Icon Description" />
                       <p className='p-views'>{videoDetails.views}</p>
                     <img src={likeIcon}alt="Icon Description"/>
                      <p className='p-likes'>{videoDetails.likes}</p>
        
                  </div>
          </div>
                 <p className="main-video-description">{videoDetails.description}</p>

       </div>

    </section>
        
        
        </> )
}

export default Video