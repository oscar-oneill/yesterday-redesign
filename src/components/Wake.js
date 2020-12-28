import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Wake.css';
import oscar from '../media/images/artists/oscar.jpg';
import tj from '../media/images/artists/tj.jpg';
import billy from '../media/images/artists/billy.jpg';
import wakeMusic from '../media/music/01-wake-up.mp3';

const Wake = () => {
    document.title = "wake up!";

    const path = window.location.pathname;

    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    const [audio] = useState(new Audio(wakeMusic));
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        if (playing) {
            (audio.play())
        } else {
            (audio.pause())
        }

    }, [playing, audio]);

    useEffect(() => {
        if (playing && path !== "/wake-up") {
           (audio.pause()) && (audio.currentTime = 0)     
        }
    });

    return (
        <div className="wake_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                
                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon'className={`play_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Play</title>
                    <path d='M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/>
                </svg>   

                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' className={`pause_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Pause</title>
                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z'/>
                </svg> 

            </motion.div>

            <div className={`wake_title ${closet ? "active" : "inactive"}`}>
                Wake Up!
            </div>

            <div ref={closetRef} className={`wake_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="wake_closet_title">About Wake Up! <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`wake_data ${closet ? "active" : "inactive"}`}>
                    
                    <div className={`personnel ${closet ? "active" : "inactive"}`}>Personnel</div>

                    <div className={`artist_box ${closet ? "active" : "inactive"}`}>
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={oscar} alt="oscar"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Oscar</div>
                                <div className="artist_meta">Artist</div>
                            </div>
                        </div>

                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={tj} alt="tj"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">The Operator</div>
                                <div className="artist_meta">Producer</div>
                            </div>
                        </div>
                       
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={billy} alt="photographer"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Billy Gomberg</div>
                                <div className="artist_meta">Photography Credit</div>
                            </div>
                        </div>
                    </div> 

                    <div className={`lyrics ${closet ? "active" : "inactive"}`}>Lyrics</div>

                    <div className={`lyric_text ${closet ? "active" : "inactive"}`}>
                        interlude: samuel l. jackson <br/>
                        waaake up! <br/>
                        wake up, wake up, wake up! <br/>
                        up you wake, up you wake, up you wake, up you wake <br/>
                        this is mr. señor love daddy, your voice of choice <br/>
                        the world's only 12-hour, strong man on the air <br/>
                        here on we love radio 108 fm <br/>
                        the last on your dial, but first in your heart <br/>
                        and that's the truth, ruth <br/>
                        here i am <br/>
                        am i here? you know it! <br/>
                        it you know <br/>
                        this is mr. señor love daddy <br/>
                        doing the nasty to your ears <br/>
                        your ears to the nasty <br/>
                        i's only play the platters that matter <br/>
                        the matters they platter <br/>
                        and that's the truth, ruth <br/>
                        from the heart of bed-stuy <br/>
                        you're listening to we love radio <br/>
                        
                        <br/><br/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wake
