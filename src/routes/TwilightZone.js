import React from 'react';
import '../styles/Main.css';
import Song from '../components/Song';

const TwilightZone = () => {
    document.title = "twilight zone";
    const background = "url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2Fruddy-media-Hqafza8h7kw-unsplash.jpg?alt=media&token=b8a1f465-b806-4027-b049-c881379977e1)";

    return (
        <>
            <Song title="twilight zone" music="" background={background} songID="6" lyricsText={null}/>
        </>
    )
}

export default TwilightZone
