import React from 'react';
import '../styles/Main.css';
import Song from '../components/Song';

const Surf = () => {
    document.title = "surf";
    const background = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.26)), url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2Fricky-coney-island-beach.jpg?alt=media&token=159c28a8-dd0b-42e0-a973-ebb41dc0f1f9)";

    return (
        <>
            <Song title="surf" music="" background={background} songID="3" lyricsText={null}/>
        </>
    )
}

export default Surf
