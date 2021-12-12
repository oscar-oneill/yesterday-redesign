import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';


const Landing = () => {
    document.title = "yesterday";

    const video = "https://res.cloudinary.com/oscarone/video/upload/v1639335510/Yesterday/Video/yesterday_ufibsl.mp4";

    return (
        <div className="landing_container">
            <video autoPlay preload="true" loop muted playsInline>
                <source src={video} type="video/mp4"/>
            </video>

            <div className="start_button">
                <Link to="/wake-up">start</Link>
            </div>
        </div>
    )
}

export default Landing
