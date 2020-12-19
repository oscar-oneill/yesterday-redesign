import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../components/LifeIsGood.css';
import oscar from '../media/images/artists/oscar.jpg';
import omari from '../media/images/artists/omari.jpg';
import louey from '../media/images/artists/louey.jpg';
import ricky from '../media/images/artists/ricky.jpg';
import goodMusic from '../media/music/02-life-is-good.mp3';

const LifeIsGood = () => {
    document.title = "life is good (feat. louey)";

    const path = window.location.pathname;

    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    const [audio] = useState(new Audio(goodMusic));
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
        if (playing && path !== "/life-is-good") {
           (audio.pause()) && (audio.currentTime = 0)     
        }
    });

    return (
        <div className="good_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>

                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon'className={`play_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Play</title>
                    <path d='M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'/>
                </svg>   

                <svg xmlns='http://www.w3.org/2000/svg' class='ionicon' className={`pause_icon ${playing ? "active" : "inactive"}`} onTouchStart={toggle} onClick={toggle} viewBox='0 0 512 512'><title>Pause</title>
                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z'/>
                </svg> 

            </motion.div>

            <div className={`good_title ${closet ? "active" : "inactive"}`}>
                Life Is Good (feat<span className="end">.</span> Louey)
            </div>

            <div ref={closetRef} className={`good_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="good_closet_title">About Life Is Good <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`good_data ${closet ? "active" : "inactive"}`}>
                    
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
                                <img src={omari} alt="tj"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Omari T.</div>
                                <div className="artist_meta">Producer</div>
                            </div>
                        </div>

                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={louey} alt="louey"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Louey</div>
                                <div className="artist_meta">Guest</div>
                            </div>
                        </div>
                       
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={ricky} alt="photographer"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">oldnewyorker</div>
                                <div className="artist_meta">Photography Credit</div>
                            </div>
                        </div>
                    </div> 

                    <div className={`lyrics ${closet ? "active" : "inactive"}`}>Lyrics</div>

                    <div className={`lyric_text ${closet ? "active" : "inactive"}`}>
                        intro: <br/>
                        "everybody" <br/>
                        
                        <br/><br/>

                        verse 1: louey <br/>
                        uh, i gotta do it like...this, yeah <br/>
                        yo enie, meanie, miney, mo <br/>
                        the competition gotta go <br/>
                        and if they don't speak english <br/>
                        i tell them adios! <br/>
                        i got the safety off <br/>
                        i'm ready to kill all of y'all <br/>
                        they solidified as kittens if they ain't my dawgs <br/>
                        feeling like the illest nigga living on the planet <br/>
                        man, i'm too fly, it's like i'm never ever landing <br/>
                        i do it for a reason 'cause i know you can't stand it <br/>
                        and i see you taking shots <br/>
                        but it's like your gun jammin' <br/>
                        hip-hop is dead, well i'm the one to resurrect the shit <br/>
                        new york, new york, i'm the one to represent the shit <br/>
                        from the old heads to the youngin's <br/>
                        they respect the shit <br/>
                        since '93, i been recking shit <br/>
                        i'm going all the way up 'cause sky's the limit <br/>
                        still so humble crusin' in my honda civic <br/>
                        i ain't throwing shade but i'm rapping what i'm living <br/>
                        bars hit harder than a lesson full of physics <br/>
                        let's get it <br/>
                            
                        <br/> <br/>

                        chorus: <br/>
                        back in the days, when i was young <br/>
                        i’m not a kid anymore <br/>
                        some days ain't like the ones that i was living before <br/>
                        some days i'm reminiscing and <br/>
                        it make a nigga really wish he was a kid again, ayo <br/>
                        back in the days, when i was young <br/>
                        i’m not a kid anymore <br/>
                        some days ain't like the ones that i was living before <br/>
                        some days i'm reminiscing and <br/>
                        it make a nigga really wish he was a kid again <br/>

                        <br/> <br/>

                        verse 2: oscar <br/>
                        you on point, dawg? <br/>
                        all the time, my nigga <br/>
                        so what’s poppin’? what’s on your mind, my nigga? <br/>
                        i'm thinking i should be happy that i'm breathing, yep <br/>
                        i'm trying to shake the devil <br/>
                        i'm exorcising my demons <br/>
                        straight up, shit is real <br/>
                        and any day could be your last, my nigga <br/>
                        life's too short to dwell in the past <br/>
                        but when it comes to this rap shit, i’m a genius, right? <br/>
                        'cause everybody looking at me like i'm jesus christ <br/>
                        he’s just nice! <br/>
                        i had good enough people tell me i ain’t good enough <br/>
                        the hood told me i ain't hood enough <br/>
                        so i disregard that, i cop a new fitted <br/>
                        rest in peace to my haters, yeah, i told them good riddance <br/>
                        all of the chit-chatter's getting a little ridiculous <br/>
                        made it past 21, now serendipity's limitless <br/>
                        it’s goodbye for now, the time we spent was stellar <br/>
                        queens get the money, yeah, i’m reppin’ forever <br/>
                        let’s go <br/>
                        
                        <br/> <br/>

                        chorus: <br/>
                        back in the days, when i was young <br/>
                        i’m not a kid anymore <br/>
                        some days ain't like the ones that i was living before <br/>
                        some days i'm reminiscing and <br/>
                        it make a nigga really wish he was a kid again, ayo <br/>
                        back in the days, when i was young <br/>
                        i’m not a kid anymore <br/>
                        some days ain't like the ones that i was living before <br/>
                        some days i'm reminiscing and <br/>
                        it make a nigga really wish he was a kid again <br/>
                        
                        <br/> <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifeIsGood
