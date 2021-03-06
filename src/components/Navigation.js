import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navigation.css';


const Navigation = () => {
    const optionsRef = useRef(null);
    const [slide, setSlide] = useState(false);
    const slideOptions = () => setSlide(!slide); 

    return (
        <div id="nav">
            <div className="nav_container">
                <Link to="/"><div id="title">Yesterday<span className="end">.</span></div></Link>

                <ion-icon onClick={slideOptions} id="star" name="star-outline"></ion-icon>
            </div>

            <div ref={optionsRef} className={`slider ${slide ? "active" : "inactive"}`}>
                <ul className={`musiclist ${slide ? "active" : "inactive"}`}>
                    <Link onClick={slideOptions} to="/wake-up">
                        <li>
                            <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                <div className="track_circle">01</div>
                                <div className="track_data">
                                    <div className="track_name">Wake Up!</div>
                                </div>
                            </motion.div>
                        </li>
                    </Link>


                    <Link onClick={slideOptions} to="/life-is-good">
                        <li>
                            <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                <div className="track_circle">02</div>
                                <div className="track_data">
                                    <div className="track_name">Life Is Good</div>
                                    <div className="track_meta">feat. Louey</div>
                                </div>
                            </motion.div>
                        </li>
                    </Link>

                    <Link onClick={slideOptions} to="/waves">
                        <li>
                            <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                <div className="track_circle">03</div>
                                <div className="track_data">
                                    <div className="track_name">Waves</div>
                                    <div className="track_meta"><span className="isAvailable">audio unavailable</span></div>
                                </div>
                            </motion.div>
                        </li>
                    </Link>

                        <Link onClick={slideOptions} to="/surf">
                            <li>
                                <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                    <div className="track_circle">04</div>
                                    <div className="track_data">
                                        <div className="track_name">Surf</div>
                                        <div className="track_meta"><span className="isAvailable">audio unavailable</span></div>
                                    </div>
                                </motion.div>
                            </li>
                        </Link>


                        <Link onClick={slideOptions} to="/ny1-new-york-minute-pt2">
                            <li>
                                <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                    <div className="track_circle">05</div>
                                    <div className="track_data">
                                        <div className="track_name">NY1 (New York Minute), Pt. 2</div>
                                        <div className="track_meta"><span className="isAvailable">preview only</span></div>
                                    </div>
                                </motion.div>
                            </li>
                        </Link>
    

                        <Link onClick={slideOptions} to="/wildest-dreams">
                            <li>
                                <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                    <div className="track_circle">06</div>
                                    <div className="track_data">
                                        <div className="track_name">Wildest Dreams</div>
                                        <div className="track_meta">feat. Melayna - <span className="isAvailable">preview only</span></div>
                                    </div>
                                </motion.div>
                            </li>
                        </Link>
    

                        <Link onClick={slideOptions} to="/twilight-zone">
                            <li>
                                <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                    <div className="track_circle">07</div>
                                    <div className="track_data">
                                        <div className="track_name">Twilight Zone</div>
                                        <div className="track_meta"><span className="isAvailable">audio unavailable</span></div>
                                    </div>
                                </motion.div>
                            </li>
                        </Link>
    

                        <Link onClick={slideOptions} to="/dawn">
                            <li>
                                <motion.div className="tracks" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                                    <div className="track_circle">08</div>
                                    <div className="track_data">
                                        <div className="track_name">Dawn</div>
                                        <div className="track_meta"><span className="isAvailable">preview only</span></div>
                                    </div>
                                </motion.div>
                            </li>
                        </Link>
    
                </ul>

                <ul className={`social ${slide ? "active" : "inactive"}`}>
                    <li><a href="https://www.instagram.com/oscaroneill/" rel="noreferrer noopener" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li><a href="https://twitter.com/oscaroneill" rel="noreferrer noopener" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li><a href="https://www.youtube.com/channel/UCzB2hbIMFsa1586DW3eLNbQ?view_as=subscriber" rel="noreferrer noopener" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a></li>
                </ul>

            </div>
        </div>
    )
}

export default Navigation
