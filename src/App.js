import { useState } from 'react';
import { Route, Routes, Navigate, NavLink, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Comments from './component/Comments/Comments';
import Header from './component/Header/Header';
import Video from './component/Video-player/Video';
import jsonData from './data/video-details.json';
import VideoListJson from './data/videos.json';
import VideoList from './component/Video-list/Video-list';
import Page from './Pages/Page/Page';


function App() {
  const [activeVideo, setActiveVideo] = useState(jsonData[0]);
  
  const handleVideoClick = (videoId) => {
    const video = jsonData.find(video => video.id === videoId);
    setActiveVideo(video);
  };
  return ( <>
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='page' element={<Page />}/>
    <Route path='/'element={<>
    <Video  videoData = {activeVideo}/>
    <Comments videoData = {activeVideo} />
    <VideoList videoListData={VideoListJson} onVideoClick={handleVideoClick} activeVideo={activeVideo}/> 
    </>}/>
  </Routes>
  </BrowserRouter>
  
  
  </> );
}

export default App;
