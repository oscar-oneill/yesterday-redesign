import React from 'react';
import '../styles/Main.css';
import ny1 from '../media/music/05-NY1 (New York Minute), Pt. 2 (Preview).mp3';
import lyricsText from '../lyrics/ny1.txt';
import Song from '../components/Song';

const NY1 = () => {
    document.title = "ny1 (new york minute), pt. 2";
    const background = "url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2Fivana-cajina-qpNhPW7zyFg-unsplash.jpg?alt=media&token=b28526bd-aebe-4980-8858-a3c04eb5d386)";
    const path = window.location.pathname;

    return (
        <>
            <Song title="ny1 (new york minute), pt. 2" music={ny1} background={background} songID="4" lyricsText={lyricsText}/>
        </>
    )
}

export default NY1
