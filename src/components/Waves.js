import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import '../components/Waves.css';
import oscar from '../media/images/artists/oscar.jpg';
import quentin from '../media/images/artists/quentin.jpg';
import nicki from '../media/images/artists/nicki.jpg';

const Waves = () => {
    const closetRef = useRef(null);
    const [closet, setCloset] = useState(false);
    const tuneCloset = () => setCloset(!closet);

    document.title = "waves";

    return (
        <div className="waves_container">
            <motion.div className={`play_container ${closet ? "active" : "inactive"}`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <ion-icon id="play" name="caret-forward-outline"></ion-icon>
            </motion.div>

            <div className={`waves_title ${closet ? "active" : "inactive"}`}>
                Waves
            </div>

            <div ref={closetRef} className={`waves_closet ${closet ? "active" : "inactive"}`}>
                <div onClick={tuneCloset} className="waves_closet_title">About Waves <ion-icon id="caret" name="caret-down-outline"></ion-icon> </div>
                <div className={`waves_data ${closet ? "active" : "inactive"}`}>
                    
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
                                <img src={quentin} alt="quentin"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Quentin Shemwell</div>
                                <div className="artist_meta">Producer</div>
                            </div>
                        </div>
                       
                        <div className="artist">
                            <div className="artist_image_box">
                                <img src={nicki} alt="photographer"/>
                            </div>
                            <div className="artist_data">
                                <div className="artist_name">Nicki Manchisi</div>
                                <div className="artist_meta">Photography Credit</div>
                            </div>
                        </div>
                    </div> 

                    <div className={`lyrics ${closet ? "active" : "inactive"}`}>Lyrics</div>

                    <div className={`lyric_text ${closet ? "active" : "inactive"}`}>
                        verse 1: <br/>
                        if glory be to god, they better sanctify me <br/>
                        dildo to the mouth of any sucker mc <br/>
                        a lot of niggas ask me why i rap like i’m pissed off <br/>
                        a lot of niggas rap softer than vaginal discharge <br/>
                        i’m an enigma, i’m unparalleled <br/>
                        come aboard this lyrical carousel <br/>
                        an angry black man, a young samuel <br/>
                        line ‘em up one by one, i'll eviscerate my opponents… <br/>
                        ”how you want it?” <br/>
                        “…rest in peace to you niggas, let's take a moment…” <br/>
                        since the start of the new millennium (uh huh) <br/>
                        all i dream about is sleeping in condominiums <br/>
                        silk boxers under the bathrobe, luxurious lifestyle <br/>
                        my lifestyle's anonymous, distant from columnists <br/>
                        i’m the human embodiment of supernatural dominance <br/>
                        ascending from the ashes, maturing to prominence <br/>
                        and then i realized everything comes and it goes <br/>
                        i'm trying to get it before it come and it goes <br/>
                        
                        <br/><br/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Waves
