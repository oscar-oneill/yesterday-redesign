import React from 'react';
import '../styles/Main.css';
import wildestDreams from '../media/music/06-wildest-dreams-interlude.mp3';
import lyricsText from '../lyrics/wildestDreams.txt';
import Song from '../components/Song';

const WildestDreams = () => {
    document.title = "wildest dreams (feat. melayna)";
    const background = "url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2FJake%20Pierrelee%20-%20Two%20Girls%20Standing%20Near%20A%20Lake.jpeg?alt=media&token=2d403fb5-5af9-4dfa-b21d-55b883922e48)";

    return (
        <>
            <Song title="wildest dreams (feat. melayna)" music={wildestDreams} background={background} songID="5" lyricsText={lyricsText}/>
        </>
    )
}

export default WildestDreams