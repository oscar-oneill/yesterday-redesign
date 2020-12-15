import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import '../components/Wake.css';
import oscar from '../media/images/artists/oscar.jpg';
import tj from '../media/images/artists/tj.jpg';
import billy from '../media/images/artists/billy.jpg';

const Wake = () => {
    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    document.title = "wake up!";

    return (
        <div className="wake_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <ion-icon id="play" name="caret-forward-outline"></ion-icon>
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
