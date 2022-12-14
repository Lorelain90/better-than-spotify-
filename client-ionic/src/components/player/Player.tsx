import React, { useState, useEffect } from 'react';
import '../../App.css';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player({ accessToken, trackUri }: any){
    const [play, setPlay] = useState(false)

    useEffect(() =>{ 
        setPlay(true)
    }, [trackUri])
   

    if (!accessToken) return null;

    return(
        <SpotifyPlayer token={ accessToken }
        showSaveIcon
        callback={(state: any )=> {
            if(!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        />
    )
}