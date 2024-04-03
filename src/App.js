import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './component/Header/Header';
import Page from './Pages/Page/Page';
import VideoDetailsPage from './Pages/Video-details/Video-details';



const home = '/video/84e96018-4022-434e-80bf-000ce4cd12b8';

function App() {


  return ( <>
<BrowserRouter>
      <Header />
      <Routes>
        <Route path='/video/:videoId' element={<VideoDetailsPage />} />
        <Route path='/page' element={<Page />} />
        <Route path='/' element={<Navigate to={home} />} />
      </Routes>
    </BrowserRouter>
  ;
  
  
  </> );
}

export default App;
