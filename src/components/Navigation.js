import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../components/Navigation.css';

const Navigation = () => {
    const optionsRef = useRef(null);
    const [slide, setSlide] = useState(false);
    const slideOptions = () => setSlide(!slide); 

    const navRef = useRef(null);
    const [filler, setFiller] = useState(false);
    const navFiller = () => setFiller(!filler);

    const panelRef = useRef(null);
    const [panel, setPanel] = useState(false);
    const trackPanel = () => setPanel(!panel);

    useEffect(() => {

        if (filler === false) {
            setPanel(false)
        }

    }, [filler])

    return (
        <>
            <div ref={navRef} className={`nav_container ${filler ? "active" : "inactive"}`}>
                <div id="title">yesterday<span id="end">.</span></div>

                <ion-icon onClick={() => { slideOptions(); navFiller(); }} id="star" name="star-outline"></ion-icon>

                <div ref={optionsRef} className={`slider ${slide ? "active" : "inactive"}`}>
                    <button onClick={() => { trackPanel(); }} className="tracklist">Tracklisting</button>

                    <ul id="social">
                        <li><a href="https://www.instagram.com/oscaroneill/" rel="noreferrer noopener" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="https://twitter.com/oscaroneill" rel="noreferrer noopener" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="https://www.youtube.com/channel/UCzB2hbIMFsa1586DW3eLNbQ?view_as=subscriber" rel="noreferrer noopener" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a></li>
                    </ul>
                </div>
            </div>

            <div ref={panelRef} className={`musiclist ${panel ? "active" : "inactive"}`}>
                <motion.div className="tracks box_1" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">01</div>
                    <div className="track_data">
                        <div className="track_name">Wake Up!</div>
                        <div className="track_meta"></div>
                    </div>
                </motion.div>
                <motion.div className="tracks box_2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">02</div>
                    <div className="track_data">
                        <div className="track_name">Life Is Good</div>
                        <div className="track_meta">feat. Louey</div>
                    </div>
                </motion.div>
                <motion.div className="tracks box_3" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">03</div>
                    <div className="track_data">
                        <div className="track_name">Surf</div>
                        <div className="track_meta"></div>
                    </div>
                </motion.div>
                <motion.div className="tracks box_4" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">04</div>
                    <div className="track_data">
                        <div className="track_name">Waves</div>
                        <div className="track_meta"></div>
                    </div>
                </motion.div>
                <motion.div className="tracks box_5" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">05</div>
                    <div className="track_data">
                        <div className="track_name">NY1 (New York Minute), Pt. 2</div>
                        <div className="track_meta"></div>
                    </div>
                </motion.div>
                <motion.div className="tracks box_6" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">06</div>
                    <div className="track_data">
                        <div className="track_name">Wildest Dreams</div>
                        <div className="track_meta">feat. Melayna</div>
                    </div>
                </motion.div>
                <motion.div className="tracks box_7" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">07</div>
                    <div className="track_data">
                        <div className="track_name">Twilight Zone</div>
                        <div className="track_meta"></div>
                    </div>
                </motion.div>
                <motion.div className="tracks box_8" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <div className="track_circle">08</div>
                    <div className="track_data">
                        <div className="track_name">Dawn</div>
                        <div className="track_meta"></div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Navigation
