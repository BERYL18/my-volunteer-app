import {
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTitle,
} from "@ionic/react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import LocalStorage from "../../../helpers/storage";
import { informationCircleOutline } from 'ionicons/icons';

const UserRole = () => {
    const history = useHistory();

    const handleVolunteerRegistration = () => {
      history.push('/sign-up-volunteer');
    };
    const handleOrganizationRegistration = () => {
        history.push('/sign-up-organization');
      };
      const handleSignin = () => {
        history.push('/sign-in');
      };
      const handleInfo = () => {
        history.push('/info');
      };
  return (
    <IonPage >
      <IonContent color="back3">
      <div className="flex_space_between">

    <IonItem lines="none" className='logo_item'>
 .       <IonImg src="../../../assets/images/logo_2.png"  className='logo_img' alt="logo" />

 <IonButton  fill="clear"  onClick={handleInfo}> <IonIcon icon={informationCircleOutline} color="new" /></IonButton>
</IonItem>
    
        
            <IonText color='new'>
               Welcome!  Please create an account
            </IonText>

        
       <div >
          <IonButton color='warning' expand='block' size="large"  onClick={handleVolunteerRegistration}>I am a Volunteer </IonButton>
           
          <IonButton color='warning'  expand='block' size='large'  onClick={handleOrganizationRegistration}>I am an Organization </IonButton>
         </div>

<IonItem>
          <IonText>Already having an account? </IonText><IonButton  fill="clear"  onClick={handleSignin}> Login</IonButton>
</IonItem>

          </div> 
      </IonContent>
    </IonPage>
  );
};

export default UserRole;
