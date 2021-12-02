import {useState, useEffect} from 'react';
import Loop from '../imgs/loop.mp4';
import Click from '../imgs/click.mp4';


const Curtain = ({delayPageload}) => {

    const [vidUrl, setVidUrl] = useState(Loop);
    const [gotClicked, setGotClicked] = useState(false);
    const [vidTime, setVidTime] = useState(0);

    useEffect(() => {
        if(!gotClicked){
            setVidUrl(Loop);
        }
        if(gotClicked){
            setVidUrl(Click);
            setVidTime(document.getElementById('vid').duration);
        }
    }, [gotClicked]);
    const clickEvent = (time) => {
        if (!gotClicked) {
            setGotClicked(true);
            delayPageload(time);
        }
    }
    
    return (
        <div className="curtain">
            <video id="vid" src={vidUrl} autoPlay muted/>
            <button className="touch-btn" onClick={() => clickEvent(vidTime)}>Touch</button>
        </div>
    )
}

export default Curtain
