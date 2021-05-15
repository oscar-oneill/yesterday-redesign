import React, { useState, useEffect } from 'react';

const Personnel = ({songID}) => {
    const [personnel, setPersonnel] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("yesterday.json");
            const data = await response.json();

            let content = data.map(data => data);
            let results = content, i

            for (i = 0; i < results.length; i++) {
                setPersonnel(results[songID].personnel)
            }
        }

        getData();

    }, [songID]);

    return (
        <>
            {personnel && personnel.map((artist, i) => (
                <div className="artist" key={i++}>
                    <div className="artist_image_box">
                        <img src={artist.image_url} alt={artist.artist}/>
                    </div>
                    <div className="artist_data">
                        <div className="artist_name">{artist.artist.toLowerCase()}</div>
                        <div className="artist_meta">{artist.role.toLowerCase()}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Personnel
