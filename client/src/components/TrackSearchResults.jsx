import React from 'react';

export default function TrackSearchResults({ track, chooseTrack }){
    function handlePlay() {
        chooseTrack(track);
    }
    
    return(
        <section className='d-flex m-2 align-items-center'
        style={{ cursor: 'pointer' }}
        onClick={handlePlay}>
            <img src={track.albumUrl} style={{ height: '64px', width: '64px' }} alt={track.title}/>
            <section className='ms-3'>
                <section>{track.title}</section>
                <section className='text-muted'>{track.artist}</section>
            </section>
        </section>
    )
}