import React from 'react'
import { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../../component/Video-player/Video';
import VideoList from '../../component/Video-list/Video-list';
import Comments from '../../component/Comments/Comments';




const  apiKey= "b08b735a-8a49-4757-9dd5-46e712502667";

function VideoDetailsPage() {
    let { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState({ comments: [] });
    const [videoListData, setVideoListData] = useState([]);
  
    useEffect(() => {
      axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
        .then((response) => setVideoDetail(response.data))
        .catch((error) => console.error("Problem Fetching Video", error));
    }, [videoId]);
  
    useEffect(() => {
      axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
        .then((response) => setVideoListData(response.data))
        .catch((error) => console.error("Problem Feching Video List", error));
    }, []);
  
    return (
      <>
        <Video videoData={videoDetail} />
        <div className='comments-video-list'>
          <div className='comments-container'>
            <Comments videoData={videoDetail} />
           
          </div>
          <VideoList videoListData={videoListData} activeVideo={videoDetail} />
        </div>
      </>
    );
  
}

export default VideoDetailsPage