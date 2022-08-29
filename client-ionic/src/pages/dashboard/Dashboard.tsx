import { IonContent, IonFooter, IonGrid, IonHeader, IonCol, IonSearchbar, IonText, IonToolbar } from '@ionic/react';
import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import useAuth from '../../services/useAuth';
import Player from '../../components/player/Player';
import TrackSearchResults from '../../components/trackSearchResults/TrackSearchResults';
import '../../App.css';
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
})

export default function Dashboard ({ code }: any) {
    const accessToken = useAuth(code);
    const [search, setSearch]: any = useState('');
    const [searchResults, setSearchResults] : any = useState([]);
    const [playingTrack, setPlayingTrack]: any = useState()
    const [lyrics, setLyrics]: any = useState('')

    function chooseTrack(track: any) {
        setPlayingTrack(track)
        setSearch('')
        setLyrics('')
    }

    useEffect(() => {
        if(!playingTrack) return; 

        axios.get('http://localhost:3001/lyrics', {
            params: {
                track: playingTrack.title,
                artist: playingTrack.artist,
            }
        })
        .then(res => {
            setLyrics(res.data.lyrics)
        })
    }, [playingTrack])

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(():any => {
        if(!search) return setSearchResults([])
        if(!accessToken) return

        let cancel = false

        spotifyApi.searchTracks(search)
        .then((res: any) =>{
            if(cancel) return

            setSearchResults(res.body.tracks.items.map((track: any)=> {
                    const smallestAlbumImage = track.album.images.reduce((smallest: any, image: any) => {
                        if(image.height < smallest.height) return image
                        return smallest
                    }, track.album.images[0])

                return{
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
            }))
        })

        return () => cancel = true
      
    }, [search, accessToken])

    return(
        <IonContent style={{ height: '100vh' }}>
            <IonHeader>    
                <IonSearchbar type='search' placeholder='Search Songs/Artists' value={search} onIonChange={(e) => setSearch(e.detail.value!)}/>
            </IonHeader>

            <IonContent style={{ overflow: 'auto' }}> 
                <IonGrid>
                    <IonCol>
                        {searchResults.map((track : any) => (
                            <TrackSearchResults track={track} key={track.uri} chooseTrack={chooseTrack}/>
                        ) )}
                    </IonCol>
                </IonGrid>
                
                {searchResults.length === 0 && (
                    <IonText style={{ whiteSpace: "pre" }}>
                        {lyrics}
                    </IonText>
                )}
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <Player accessToken={ accessToken } trackUri={playingTrack?.uri}/>
                </IonToolbar>
            </IonFooter>
        </IonContent>
    )
};
