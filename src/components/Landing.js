import React from 'react';
import '../components/Landing.css';

const Landing = () => {
    document.title = "yesterday";

    const yesterday = "https://yesterday-album.s3.amazonaws.com/yesterday.mp4";

    return (
        <div className="landing_container">
            <video autoPlay preload autoBuffer loop muted>
                <source src={yesterday} type="video/mp4"/>
            </video>

            <div className="start_button">
                <a href="/wake-up">start</a>
            </div>
        </div>
    )
}

export default Landing
