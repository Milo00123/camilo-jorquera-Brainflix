import React from 'react'
import { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../../component/Video-player/Video';
import VideoList from '../../component/Video-list/Video-list';
import Comments from '../../component/Comments/Comments';


const defaultVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8';


function VideoDetailsPage() {
    let { videoId } = useParams();
    const [data, setData] = useState({ videoDetail: { comments: [] }, videoListData: [] });
  
    useEffect(() => {
      const fetchVideoList = () => {
          axios.get(`http://localhost:8080/videos?`)
              .then(response => {
                  setData(prevState => ({
                      ...prevState,
                      videoListData: response.data
                  }));
              })
              .catch(error => console.error("Problem Fetching Video List", error));
      };

      const fetchVideoDetail = (idToFetch) => {
          axios.get(`http://localhost:8080/videos/${idToFetch}`)
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