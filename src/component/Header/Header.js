import './Header.scss';
import {  useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/Icons/search.svg';
import uploadIcon from '../../assets/Icons/upload.svg';


function Header (){
   const navigate = useNavigate()

    return(
        <>
        <header className="header">
            <div className='header-container'>
                
                  <img src={logo} onClick={()=> navigate('/')} className="brainflix-logo" alt="logo"></img>
             <div className='container-logo--avatar'>
                  <div className='input-container'>
                       <img src={searchIcon} className="search-icon"></img>
                   <input type="text" placeholder=" Search"></input>  
                   </div> 
                 <div className='button-header-container'> 
                 <img src={uploadIcon} className='upload-icon'></img>     
                <button className='header-button' onClick={()=> navigate('upload')}>UPLOAD</button>
                </div>               
                <div className='avatar-icon'></div>
                </div>
            </div>
            

        </header>
        </>
    )
};

export default Header