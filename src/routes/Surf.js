import React from 'react';
import '../styles/Main.css';
import Song from '../components/Song';

const Surf = () => {
    document.title = "surf";
    const background = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.26)), url(https://res.cloudinary.com/oscarone/image/upload/v1639332271/Yesterday/Background%20Images/ricky-singh-coney-island-beach_sztbnp.jpg)";

    return (
        <>
            <Song title="surf" music="" background={background} songID="3" lyricsText={null}/>
        </>
    )
}

export default Surf
