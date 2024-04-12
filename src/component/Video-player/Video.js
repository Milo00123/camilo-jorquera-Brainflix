import './Video.scss';
import { useEffect } from 'react';

function Video(props){
    const videoDetails = props.videoData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [videoDetails]);
    return(<>
    <section className="video">
            <video className='video-displayed'poster={videoDetails.image} controls/>

    </section>
        
        
        </> )
}

export default Video