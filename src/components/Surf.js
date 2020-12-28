import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import '../styles/Surf.css';
import oscar from '../media/images/artists/oscar.jpg';
import zeros from '../media/images/artists/zeros.jpg';
import ricky from '../media/images/artists/ricky.jpg';

const Surf = () => {
    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    document.title = "surf";

    return (
        <div className="surf_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <ion-icon id="play" name="caret-forward-outline"></ion-icon>
            </motion.div>

            <div className={`surf_title ${closet ? "active" : "inactive"}`}>
                Surf
            </div>

            <div ref={closetRef} className={`surf_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="surf_closet_title">About Surf <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`surf_data ${closet ? "active" : "inactive"}`}>
                    
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
                                <img src={zeros} alt="zeros"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">zerosand1nes</div>
                                <div className="artist_meta">Producer</div>
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
                        Lyrics currently unavailable
                        
                        <br/><br/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surf
