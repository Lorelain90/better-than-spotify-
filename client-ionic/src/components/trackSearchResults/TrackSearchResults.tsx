import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/react';
import '../../App.css';

export default function TrackSearchResults({ track, chooseTrack }: any){
    function handlePlay() {
        chooseTrack(track);
    }
    
    return(
        <IonCard
        style={{ cursor: 'pointer' }}
        onClick={handlePlay}>
            <IonImg  src={track.albumUrl} style={{ height: '64px', width: '64px' }} alt={track.title}/>
            <IonCardContent>
                <IonCardTitle>{track.title}</IonCardTitle>
                <IonCardSubtitle className='text-muted'>{track.artist}</IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    )
}