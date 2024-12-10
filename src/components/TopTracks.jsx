import { useState } from "react";
//import { useAudiosManagement } from '../models/Audios'
import tracks from "./data/Tracks";

function TopTracks() {

    const [activeTrack, setActiveTrack] = useState(null);
    //const { data: tracks } = useAudiosManagement();

    // Gestion de la lecture/pause
    const togglePlayPause = (track) => {
        if (activeTrack?.id === track.id) {
        activeTrack.audio.pause();
        setActiveTrack(null);
        } else {
        if (activeTrack) activeTrack.audio.pause();
        const audio = new Audio(track.src);
        audio.play();
        setActiveTrack({ ...track, audio });
        audio.addEventListener("ended", () => setActiveTrack(null));
        }
    };
    
    return (
        <div className="top_tracks" id="top_tracks">
            <p id="heading"><i className='bx bxs-playlist'></i>&nbsp;&nbsp;Playlist</p>
            <div id="track"></div>
            
            {tracks.map((track) => (
                <div key={track.id} id="track">
                    <img src={track.img} alt={track.title} />
                    <div id="actions">
                        <a href="#"><i className='bx bx-heart' ></i></a>
                        <a id="play_pause" onClick={() => togglePlayPause(track)}>
                            <i className={`bx ${ activeTrack?.id === track.id ? "bx-pause" : "bx-play" }`} ></i>
                        </a>
                    </div>

                    <div id="song_desc">
                        <p>{track.title}</p>
                        <p>{track.artist}</p>
                        <p id="total_download">
                            <i className="bx bx-headphone"></i>&nbsp;&nbsp;{track.downloads}+
                        </p>
                        {track.isNew && <p id="message">New</p>}
                    </div>
                    <div id="actions_2">
                        <p><a href="#"><i className='bx bx-share' ></i></a></p>
                    </div>
                </div>
            ))}
	    </div>
    )
}

export default TopTracks
