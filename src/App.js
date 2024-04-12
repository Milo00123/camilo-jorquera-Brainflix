import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
import Page from './Pages/Page/Page';
import VideoDetailsPage from './Pages/Video-details/Video-details';


function App() {


  return ( <>
<BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<VideoDetailsPage />}  />
          <Route path='/video/:videoId' element={<VideoDetailsPage />} />
          <Route path='/page' element={<Page />} />
        
      </Routes>
    </BrowserRouter>
  ;
  
  
  </> );
}

export default App;
