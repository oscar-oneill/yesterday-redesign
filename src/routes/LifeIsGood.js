import React from 'react';
import '../styles/Main.css';
import good from '../media/music/02-life-is-good.mp3';
import lyricsText from '../lyrics/lifeIsGood.txt';
import Song from '../components/Song';

const LifeIsGood = () => {
    document.title = "life is good (feat. louey)";
    const background = "url(https://res.cloudinary.com/oscarone/image/upload/v1639332269/Yesterday/Background%20Images/Maxwell_Schiano_-_Coney_Island_kyy2b7.jpg)";

    return (
        <>
            <Song title="life is good (feat. louey)" music={good} background={background} songID="1" lyricsText={lyricsText}/>
        </>
    )
}

export default LifeIsGood
