import React from 'react';
import '../styles/Main.css';
import wildestDreams from '../media/music/06-wildest-dreams-interlude.mp3';
import lyricsText from '../lyrics/wildestDreams.txt';
import Song from '../components/Song';

const WildestDreams = () => {
    document.title = "wildest dreams (feat. melayna)";
    const background = "url(https://res.cloudinary.com/oscarone/image/upload/v1639332271/Yesterday/Background%20Images/Jake_Pierrelee_-_Two_Girls_Standing_Near_A_Lake_kstqnc.jpg)";

    return (
        <>
            <Song title="wildest dreams (feat. melayna)" music={wildestDreams} background={background} songID="5" lyricsText={lyricsText}/>
        </>
    )
}

export default WildestDreams