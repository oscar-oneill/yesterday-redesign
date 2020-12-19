import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../components/WildestDreams.css';
import oscar from '../media/images/artists/oscar.jpg';
import taebeast from '../media/images/artists/taebeast.jpg';
import melayna from '../media/images/artists/melayna.jpg';
import jake from '../media/images/artists/jake.jpg';
import wildestMusic from '../media/music/06-wildest-dreams-interlude.mp3';

const WildestDreams = () => {
    document.title = "wildest dreams (feat. melayna)";

    const path = window.location.pathname;

    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    const [audio] = useState(new Audio(wildestMusic));
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
        if (playing && path !== "/wildest-dreams") {
           (audio.pause()) && (audio.currentTime = 0)     
        }
    });

    return (
        <div className="dream_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                
                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon'className={`play_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Play</title>
                    <path d='M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/>
                </svg>   

                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' className={`pause_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Pause</title>
                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z'/>
                </svg> 

            </motion.div>

            <div className={`dream_title ${closet ? "active" : "inactive"}`}>
                Wildest Dreams (feat<span className="end">.</span> Melayna)
            </div>

            <div ref={closetRef} className={`dream_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="dream_closet_title">About Wildest Dreams <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`dream_data ${closet ? "active" : "inactive"}`}>
                    
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
                                <img src={taebeast} alt="taebeast"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Tae Beast</div>
                                <div className="artist_meta">Producer</div>
                            </div>
                        </div>
                       
                       <div className="artist">
                            <div className="artist_image_box">
                                <img src={melayna} alt="melayna"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Melayna</div>
                                <div className="artist_meta">Guest</div>
                            </div>
                        </div>

                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={jake} alt="photographer"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Jake Pierrelee</div>
                                <div className="artist_meta">Photography Credit</div>
                            </div>
                        </div>
                    </div> 

                    <div className={`lyrics ${closet ? "active" : "inactive"}`}>Lyrics</div>

                    <div className={`lyric_text ${closet ? "active" : "inactive"}`}>
                        verse 1: oscar <br/>
                        i never knew a love, la-la-love, a love (like this) <br/> 
                        gotta be something from deep to write this <br/>
                        look, fascinated by your allure <br/>
                        the way you’re rocking designer fashion <br/>
                        all the latest couture <br/>
                        i take a mental note <br/>
                        of all the things that you be telling me <br/>
                        the sound of your voice is one of my favorite melodies <br/>
                        i'm trying to lay back, girl, recline with you <br/>
                        no need to fret about it <br/>
                        give me your heart, make it real, or else forget about it <br/>
                        (here we go again) <br/>
                        rarely do i ever get my feelings involved <br/>
                        so i wrote my feelings down, turned it into a song <br/>
                        got love for you, i may not exhibit it <br/>
                        you should know that capricorns are naturally inhibited <br/>
                        you should know that every moment that we spend is magnificent <br/>
                        if i'm on my last dollar <br/>
                        you're the one that i'd split it with <br/>
                        i'm wrapped around your love <br/>
                        got me feeling like an s-curl <br/>
                        you know your smile is your best curve <br/>
                        
                        <br/><br/>

                        chorus: <br/>
                        never in my wildest dreams <br/>
                        never in my wildest dreams (woo woo woooo) <br/>
                        never in my wildest dreams <br/>
                        never in my wildest dreams <br/>
                        i had dreams of fucking an r&b bitch <br/>
                        but then i met you <br/>
                        you kinda flipped the whole script, yeah <br/>
                        i’ve always known from the start <br/>
                        was hoping maybe one day <br/>
                        that you would give me your heart <br/>

                        <br/><br/>

                        verse 2: melayna <br/>
                        now when you walk through the door <br/>
                        i hear the melodies of love when they call <br/>
                        i’m in love with you <br/>
                        (i asked you nicely don't make the dogg lose it) <br/>
                        because i never knew love before <br/>
                        no i never knew love before <br/>
                        no i never knew <br/>
                        knew, love, love <br/>
                        until you <br/>

                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WildestDreams
