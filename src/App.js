import { useState } from 'react';
import './App.css';
import Comments from './component/Comments/Comments';
import Header from './component/Header/Header';
import Video from './component/Video-player/Video';
import jsonData from './data/video-details.json';
import VideoListJson from './data/videos.json';
import VideoList from './component/Video-list/Video-list';

function App() {
  const [activeVideo, setActiveVideo] = useState(jsonData[0]);
  
  const handleVideoClick = (videoId) => {
    const video = jsonData.find(video => video.id === videoId);
    setActiveVideo(video);
  };
  return ( <>
  <Header />
  <Video  videoData = {activeVideo}/>
  <Comments videoData = {activeVideo} />
  <VideoList videoListData={VideoListJson} onVideoClick={handleVideoClick} activeVideo={activeVideo}/>
  
  </> );
}

export default App;
