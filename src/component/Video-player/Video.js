import './Video.scss';

function Video(props){
    const videoDetails = props.videoData;


    return(<>
    <section className="video">
            <video className='video-displayed'poster={videoDetails.image} controls/>

    </section>
        
        
        </> )
}

export default Video