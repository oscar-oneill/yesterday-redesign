import React from 'react';
import Song from '../components/Song';
import '../styles/Main.css';
import dawn from '../media/music/08-dawn-outerlude.mp3';

const Dawn = () => {
    document.title = "dawn";
    const path = window.location.pathname;
    const background = "url(https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/images%2Fbackground%2Fsimon-shim-LX7f4K8t9o4-unsplash.jpg?alt=media&token=3310b46a-82d7-4e73-a6db-74072016c0d3)";

    return (
        <>
            <Song title="dawn" music={dawn} background={background} songID="7" lyricsText={null}/>
        </>
    )
}

export default Dawn
