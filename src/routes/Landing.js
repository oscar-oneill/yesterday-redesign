import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
    document.title = "yesterday";

    const yesterday = "https://firebasestorage.googleapis.com/v0/b/yesterday-data.appspot.com/o/video%2Fyesterday.mp4?alt=media&token=28991ad8-46b1-4a54-b183-047e592b9df1";

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
