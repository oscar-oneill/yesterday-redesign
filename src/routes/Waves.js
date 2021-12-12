import React from 'react';
import '../styles/Main.css';
import lyricsText from '../lyrics/waves.txt';
import Song from '../components/Song';


const Waves = () => {
    document.title = "waves";
    const background = "url(https://res.cloudinary.com/oscarone/image/upload/v1639332268/Yesterday/Background%20Images/nicki_manchisi_coney_island_beach_wo5tn0.jpg)";

    return (
        <>
            <Song title="waves" music="" background={background} songID="2" lyricsText={lyricsText}/>
        </>
    )
}

export default Waves
