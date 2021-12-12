import React from 'react';
import '../styles/Main.css';
import wakeUp from '../media/music/01-wake-up.mp3';
import Song from '../components/Song';
import lyricsText from '../lyrics/wakeUp.txt';

const Wake = () => {
    document.title = "wake up!";
    const background = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/oscarone/image/upload/v1639332270/Yesterday/Background%20Images/charlie-read-cUkMVstHYTw-unsplash-2_kttyoy.jpg)";

    return (
        <>
         <Song title="wake up!" music={wakeUp} background={background} songID="0" lyricsText={lyricsText}/>
        </>
    )
}

export default Wake
