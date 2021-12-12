import React from 'react';
import Song from '../components/Song';
import '../styles/Main.css';
import dawn from '../media/music/08-dawn-outerlude.mp3';

const Dawn = () => {
    document.title = "dawn";
    const background = "url(https://res.cloudinary.com/oscarone/image/upload/v1639332274/Yesterday/Background%20Images/simon-shim-559416-unsplash_ppqdt4.jpg)";

    return (
        <>
            <Song title="dawn" music={dawn} background={background} songID="7" lyricsText={null}/>
        </>
    )
}

export default Dawn
