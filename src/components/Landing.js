import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
    document.title = "yesterday";

    const yesterday = "https://icecube-us-842.icedrive.io/download?p=zkq74NeXDSvtiXWWZoUqOhE8en490q%2FRKEF1NA%2BM3hRTmQEAZGCsimYQQ2oW5wk584Mesi1YmaqPkKVFBtRFCuAOtkFQyOm4trzMGnVvsCmXlyzzti4zknhSyuR1l4HnwTpkILELlwJGV7CmDQe9P%2BlV9y%2Fmh8EoFrdgFSBtj3bLSrI8ghzkONPEPuewo0HMWRVjqCBO9XoGf9EmZY%2FnkA%3D%3D";

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
