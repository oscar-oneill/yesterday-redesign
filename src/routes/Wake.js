import React from 'react';
import '../styles/Main.css';
import wakeUp from '../media/music/01-wake-up.mp3';
import Song from '../components/Song';
import lyricsText from '../lyrics/wakeUp.txt';

const Wake = () => {
    document.title = "wake up!";
    const background = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5)), url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2Fcharlie-read-cUkMVstHYTw-unsplash.jpg?alt=media&token=b9bc4605-8576-4b9f-b661-ad82afea3c3d)";

    return (
        <>
         <Song title="wake up!" music={wakeUp} background={background} songID="0" lyricsText={lyricsText}/>
        </>
    )
}

export default Wake
