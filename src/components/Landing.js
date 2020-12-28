import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
    document.title = "yesterday";

    const yesterday = "https://yesterday-album.s3.amazonaws.com/yesterday.mp4";

    return (
        <div className="landing_container">
            <video autoPlay preload="true" loop muted playsInline>
                <source src={yesterday} type="video/mp4"/>
            </video>

            <div className="start_button">
                <Link to="/wake-up">start</Link>
            </div>
        </div>
    )
}

export default Landing
