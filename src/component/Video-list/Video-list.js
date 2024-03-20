import './Video-list.scss';


function VideoList({videoListData, onVideoClick, activeVideo}){

    const videosToDisplay = videoListData.filter(video => video.id !== activeVideo.id);

    return(<>
    <div className='video-list--section'>
    <h2>NEXT VIDEOS</h2>
    {
        videosToDisplay.map((video) =>{
            return(<>
            
            <div className="video-wrap" key={video.id} onClick={() => onVideoClick(video.id)}>
            <img className='image-list' src={video.image} alt="Description" />
            <div className='description-video--list'>
                <p className='p-bold'>{video.title}</p>
                <span>{video.channel}</span>
             </div>
            </div>
            
             
            </>)
            
        })
       
    }</div>

   
    
    
    </>)

}


export default VideoList;