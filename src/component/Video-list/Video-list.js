import './Video-list.scss';
import { Link } from 'react-router-dom';


function VideoList({videoListData, activeVideo}){

    const videosToDisplay = videoListData.filter(video => video.id !== activeVideo.id);

    return(<>
    <div className='video-list--section'>
    <h2>NEXT VIDEOS</h2>
    {
        videosToDisplay.map((video) =>{
            return(
            <Link to={`/video/${video.id}`} key={video.id}>
            <div className="video-wrap" key={video.id}>
            <img className='image-list' src={video.image} alt="Description" />
            <div className='description-video--list'>
                <p className='p-bold'>{video.title}</p>
                <span>{video.channel}</span>
             </div>
            </div>
            </Link>
             
            )
            
        })
       
    }</div>

   
    
    
    </>)

}


export default VideoList;