import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/NY1.css';
import oscar from '../media/images/artists/oscar.jpg';
import charlie from '../media/images/artists/charlie.jpg';
import newMusic from '../media/music/05-NY1 (New York Minute), Pt. 2 (Preview).mp3';

const NY1 = () => {
    document.title = "ny1 (new york minute), pt. 2";

    const path = window.location.pathname;

    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    const [audio] = useState(new Audio(newMusic));
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
        if (playing && path !== "/ny1-new-york-minute-pt2") {
           (audio.pause()) && (audio.currentTime = 0)     
        }
    });

    return (
        <div className="minute_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                
                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon'className={`play_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Play</title>
                    <path d='M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/>
                </svg>   

                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' className={`pause_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Pause</title>
                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z'/>
                </svg> 

            </motion.div>

            <div className={`minute_title ${closet ? "active" : "inactive"}`}>
                NY1 (New York Minute), Pt<span className="end">.</span> 2
            </div>

            <div ref={closetRef} className={`minute_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="minute_closet_title">About NY1 (New York Minute), Pt. 2 <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`minute_data ${closet ? "active" : "inactive"}`}>
                    
                    <div className={`personnel ${closet ? "active" : "inactive"}`}>Personnel</div>

                    <div className={`artist_box ${closet ? "active" : "inactive"}`}>
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={oscar} alt="oscar"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Oscar</div>
                                <div className="artist_meta">Artist & Producer</div>
                            </div>
                        </div>

                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={charlie} alt="photographer"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Charlie Read</div>
                                <div className="artist_meta">Photography Credit</div>
                            </div>
                        </div>
                    </div> 

                    <div className={`lyrics ${closet ? "active" : "inactive"}`}>Lyrics</div>

                    <div className={`lyric_text ${closet ? "active" : "inactive"}`}>
                        intro: <br/>
                        this is the new york living health & fitness report <br/>

                        <br/><br/>

                        dialogue: roma torre & <i>kafi drexel</i> <br/>
                        good exercise can change your perspective on life <br/>
                        and some can even turn things upside down, literally <br/>
                        ny1 health & fitness reporter, kafi drexel <br/>
                        takes a look at the benefits of gravity defying workouts <br/>
                        <i>if you pop into michael mcardle's <br/>
                        off the wall yoga at new york health and racquet club <br/>
                        chances are...</i> <br/>

                        <br/><br/>

                        verse 1: <br/>
                        wanna solidify myself as one of the greatest <br/>
                        provide you with new sounds <br/>
                        these are some of my latest <br/>
                        gotta stay on my p’s <br/>
                        cause success won’t come overnight <br/>
                        what you may see as a dream <br/>
                        others view as an oversight <br/>
                        niggas could never deal with an ego as gigantic as mine <br/>
                        that’s why you see me rocking solo almost all of the time <br/>
                        it’s why i’m never wilding out for support out here <br/>
                        ‘cause real niggas hard to find like remotes... <br/>
                        inspired from what i read the other day in this message <br/>
                        prepare yourself for the worst <br/>
                        never change your objective <br/>
                        lots of snakes in the grass <br/>
                        so it’s time that you cut it off <br/>
                        we rocking the same fabrics <br/>
                        but i’m cut from a different cloth <br/>
                        analyzed my trajectory <br/>
                        i’m bound to do something greater <br/>
                        ‘cause i’m about to blow <br/>
                        and they're still stuck on the elevator <br/>
                        whenever it get hard to keep them eyes wide <br/>
                        always remember that the money keep them eyes dry <br/>
                        what that sound like? <br/>

                        <br/><br/>

                        verse 2: <br/>
                        i need a space with better quality of oxygen <br/>
                        it's detrimental i'm inhaling all these toxins in <br/>
                        i need a view overlooking the metropolis <br/>
                        and have a white butler like i'm samurai apocalypse <br/>
                        i know some heathens quoting legendary bible quotes <br/>
                        i know some people switching patterns like kaleidoscopes <br/>
                        i need to go lay my head where it's tropical <br/>
                        and have my dream girl rubbing up on my abdominal <br/>
                        i want the finer things, exquisite opulence <br/>
                        and put elaborate stamps on my travel documents <br/>
                        despite all of your misguided presumptions <br/>
                        i'm always looking to do the right thing <br/>
                        i got a moral compass <br/>
                        tell you what they told me before <br/>
                        if opportunity don’t knock, then build a door <br/>
                        whenever it get hard to keep them eyes wide <br/>
                        always remember that the money keep them eyes dry <br/>
                        what's your life like? <br/>

                        <br/><br/>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default NY1
