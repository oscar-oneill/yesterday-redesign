import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/TwilightZone.css';
import oscar from '../media/images/artists/oscar.jpg';
import taebeast from '../media/images/artists/taebeast.jpg';
import ruddy from '../media/images/artists/ruddy.jpg';

const TwilightZone = () => {
    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    document.title = "twilight zone";

    return (
        <div className="zone_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <ion-icon id="play" name="caret-forward-outline"></ion-icon>
            </motion.div>

            <div className={`zone_title ${closet ? "active" : "inactive"}`}>
                Twilight Zone
            </div>

            <div ref={closetRef} className={`zone_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="zone_closet_title">About Twilight Zone <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`zone_data ${closet ? "active" : "inactive"}`}>
                    
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
                                <img src={taebeast} alt="zeros"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Tae Beast</div>
                                <div className="artist_meta">Producer</div>
                            </div>
                        </div>
                       
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={ruddy} alt="photographer"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">ruddy.media</div>
                                <div className="artist_meta">Photography Credit</div>
                            </div>
                        </div>
                    </div> 

                    <div className={`lyrics ${closet ? "active" : "inactive"}`}>Lyrics</div>

                    <div className={`lyric_text ${closet ? "active" : "inactive"}`}>
                        Lyrics currently unavailable
                        
                        <br/><br/>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TwilightZone
