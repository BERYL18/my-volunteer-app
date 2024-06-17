import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import { useHistory } from "react-router";
import { arrowBackOutline } from "ionicons/icons";
import SignupHeader from "../components/SignupHeader";

const Info = () => {
  const history = useHistory();

  
  const handleBack = () => {
    history.push('/user-role');
 };
  return (
    <IonPage>
      <IonContent>
      <SignupHeader title="About us" handleBack={handleBack} />

        <div className="img_and_logo">
          <IonItem lines="none">
            <IonThumbnail slot="start">
            <img src="../../../assets/images/logo.png"   alt="logo" />

            </IonThumbnail>
            <IonText color='warning'>ConekDem</IonText>
          </IonItem>

        </div>
        <IonItem lines="none" style={{padding:"20px"} }>
        
          <IonText color='medium'> <IonText color='warning'>ConekDem</IonText>  is a bridge connecting individuals in search of meaningful volunteering opportunities to Organizations in search of passionate volunteers for their projects.  </IonText>
        </IonItem>


      </IonContent>
    </IonPage>
  );
};

export default Info;
