import './Header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';


function Header (){

    return(
        <>
        <header className="header">
            <div className='header-container'>
                
                  <img src={logo} className="brainflix-logo" alt="logo"></img>
             <div className='container-logo--avatar'>
                   <input type="text" placeholder="Search"></input>        
                <button className='header-button'>UPLOAD</button>
                <div className='avatar-icon'></div>
                </div>
            </div>
            

        </header>
        </>
    )
};

export default Header