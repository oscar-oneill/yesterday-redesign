import React from 'react';
import '../styles/Main.css';
import good from '../media/music/02-life-is-good.mp3';
import lyricsText from '../lyrics/lifeIsGood.txt';
import Song from '../components/Song';

const LifeIsGood = () => {
    document.title = "life is good (feat. louey)";
    const background = "url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2FMaxwell%20Schiano%20-%20Coney%20Island.jpeg?alt=media&token=47ab31d0-ed30-4945-86b1-d01674d3b28c)";

    return (
        <>
            <Song title="life is good (feat. louey)" music={good} background={background} songID="1" lyricsText={lyricsText}/>
        </>
    )
}

export default LifeIsGood
