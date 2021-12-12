import React from 'react';
import '../styles/Main.css';
import Song from '../components/Song';

const TwilightZone = () => {
    document.title = "twilight zone";
    const background = "url(https://res.cloudinary.com/oscarone/image/upload/v1639332274/Yesterday/Background%20Images/ruddy-media-Hqafza8h7kw-unsplash-2_vga6cc.jpg)";

    return (
        <>
            <Song title="twilight zone" music="" background={background} songID="6" lyricsText={null}/>
        </>
    )
}

export default TwilightZone
