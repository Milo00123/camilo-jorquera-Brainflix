import './Header.scss';
import {  useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import faSearch from '../../assets/Icons/search.svg';


function Header (){
   const navigate = useNavigate()

    return(
        <>
        <header className="header">
            <div className='header-container'>
                
                  <img src={logo} onClick={()=> navigate('/')} className="brainflix-logo" alt="logo"></img>
             <div className='container-logo--avatar'>
                  <div className='input-container'>
                       <img src={faSearch} className="input-icon"></img>
                   <input type="text" placeholder=" Search"></input>  
                   </div>      
                <button className='header-button' onClick={()=> navigate('page')}>UPLOAD</button>
                <div className='avatar-icon'></div>
                </div>
            </div>
            

        </header>
        </>
    )
};

export default Header