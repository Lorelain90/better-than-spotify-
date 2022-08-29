import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonImg,
} from "@ionic/react";
import "../../App.css";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
  return (
    <IonGrid>
      <IonRow>
        <IonCol class="ion-justify-content-center">
          <IonButton
            class="login"
            color="success"
            href={AUTH_URL}
            shape="round"
            expand="block"
          >
            Login with Spotify
          </IonButton>
          <IonImg
            class="string"
            alt="pusheen-dj"
            src="https://c.tenor.com/jPnzQdcgss0AAAAd/pusheen-dj.gif"
          />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
