import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Main.css';
import Personnel from './Personnel';

const Song = ({title, music, background, songID, lyricsText }) => {
    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    const [audio] = useState(new Audio(music));
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);

    const [lyrics, setLyrics] = useState(null);

    useEffect(() => {
        if (playing) {
            (audio.play())
        } else {
            (audio.pause())
        }

    }, [playing, audio]);

    useEffect (() => {
        const getData = async () => {
            const response = await fetch(lyricsText);
            const data = await response.text();
            setLyrics(lyricsText === null ? "lyrics currently unavailable" : data);
        }

        getData();
    }, [lyricsText])

    return (
        <div className="container" style={{backgroundImage: `${background}`}}>
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                
                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon'className={`play_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Play</title>
                    <path d='M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/>
                </svg>   

                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' className={`pause_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Pause</title>
                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z'/>
                </svg> 

            </motion.div>

            <div className={`title ${closet ? "active" : "inactive"}`}>
                {title}
            </div>

            <div ref={closetRef} className={`closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="closet_title">About {title} <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`data ${closet ? "active" : "inactive"}`}>
                    
                    <div className={`personnel ${closet ? "active" : "inactive"}`}>Personnel</div>
                    <div className={`artist_box ${closet ? "active" : "inactive"}`}>
                        <Personnel songID={songID}/>
                    </div> 

                    <div className={`lyrics ${closet ? "active" : "inactive"}`}>Lyrics</div>

                    <div className={`lyric_text ${closet ? "active" : "inactive"}`} dangerouslySetInnerHTML={{ __html: lyrics}}></div>
                </div>
            </div>
        </div>
    )
}

export default Song
