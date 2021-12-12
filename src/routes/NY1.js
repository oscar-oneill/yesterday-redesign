import React from 'react';
import '../styles/Main.css';
import ny1 from '../media/music/05-NY1 (New York Minute), Pt. 2 (Preview).mp3';
import lyricsText from '../lyrics/ny1.txt';
import Song from '../components/Song';

const NY1 = () => {
    document.title = "ny1 (new york minute), pt. 2";
    const background = "url(https://res.cloudinary.com/oscarone/image/upload/v1639332268/Yesterday/Background%20Images/ivana-cajina-qpNhPW7zyFg-unsplash_dyogyb.jpg)";

    return (
        <>
            <Song title="ny1 (new york minute), pt. 2" music={ny1} background={background} songID="4" lyricsText={lyricsText}/>
        </>
    )
}

export default NY1
