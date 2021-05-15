import React from 'react';
import '../styles/Main.css';
import lyricsText from '../lyrics/waves.txt';
import Song from '../components/Song';


const Waves = () => {
    document.title = "waves";
    const background = "url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2Fnicki_manchisi_4788002560_11fdebc9b5_o.JPG?alt=media&token=af0111ba-76f6-4b17-ae58-018b58147cf7)";

    return (
        <>
            <Song title="waves" music="" background={background} songID="2" lyricsText={lyricsText}/>
        </>
    )
}

export default Waves
