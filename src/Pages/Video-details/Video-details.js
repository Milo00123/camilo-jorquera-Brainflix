import React from 'react'
import { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../../component/Video-player/Video';
import VideoList from '../../component/Video-list/Video-list';
import Comments from '../../component/Comments/Comments';


const defaultVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8';
const  apiKey= "b08b735a-8a49-4757-9dd5-46e712502667";

function VideoDetailsPage() {
    let { videoId } = useParams();
    const [data, setData] = useState({ videoDetail: { comments: [] }, videoListData: [] });
  
    useEffect(() => {
      const fetchVideoList = () => {
<<<<<<< HEAD
          axios.get(`http://localhost:8080/videos`)
=======
          axios.get(`http://localhost:8080/videos?api_key=${apiKey}`)
>>>>>>> develop
              .then(response => {
                  setData(prevState => ({
                      ...prevState,
                      videoListData: response.data
                  }));
              })
              .catch(error => console.error("Problem Fetching Video List", error));
      };

      const fetchVideoDetail = (idToFetch) => {
<<<<<<< HEAD
          axios.get(`http://localhost:8080/videos/${idToFetch}`)
=======
          axios.get(`http://localhost:8080/videos/${idToFetch}?api_key=${apiKey}`)
>>>>>>> develop
              .then(response => {
                  setData(prevState => ({
                      ...prevState,
                      videoDetail: response.data
                  }));
              })
              .catch(error => console.error("Problem Fetching Video", error));
      };
      fetchVideoList();
      const idToFetch = videoId || defaultVideoId;
      fetchVideoDetail(idToFetch);

  }, [videoId]); 

  
    return (
      <> 
        <Video videoData={data.videoDetail} />
        <div className='comments-video-list'>
          <div className='comments-container'>
            <Comments videoData={data.videoDetail} />
           
          </div>
          <VideoList videoListData={data.videoListData} activeVideo={data.videoDetail} />
        </div>
      </>
    );
  
}

export default VideoDetailsPage