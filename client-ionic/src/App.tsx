import {
  IonApp,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import './App.css';
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

setupIonicReact();

const code = new URLSearchParams(window.location.search).get("code");

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Welcome to Spotify</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {code ? <Dashboard code={code} /> : <Login />}
      </IonContent>

    </IonPage>
  </IonApp>
);

export default App;
