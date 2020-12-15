import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import '../components/Dawn.css';
import oscar from '../media/images/artists/oscar.jpg';
import simon from '../media/images/artists/simon.jpg';

const Dawn = () => {
    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    document.title = "dawn";
    return (
        <div className="dawn_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <ion-icon id="play" name="caret-forward-outline"></ion-icon>
            </motion.div>

            <div className={`dawn_title ${closet ? "active" : "inactive"}`}>
                Dawn
            </div>

            <div ref={closetRef} className={`dawn_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="dawn_closet_title">About Dawn <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`dawn_data ${closet ? "active" : "inactive"}`}>
                    
                    <div className={`personnel ${closet ? "active" : "inactive"}`}>Personnel</div>

                    <div className={`artist_box ${closet ? "active" : "inactive"}`}>
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={oscar} alt="oscar"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Oscar</div>
                                <div className="artist_meta">Artist, Producer</div>
                            </div>
                        </div>
                       
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={simon} alt="photographer"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Simon Shim</div>
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

export default Dawn
