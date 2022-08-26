import { IonButton, IonContent} from '@ionic/react';
import './Login.css';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export default function Login(){
  return (
      <IonContent fullscreen>
        <IonButton href={AUTH_URL}>Login with Spotify</IonButton>
      </IonContent> 
  );
};