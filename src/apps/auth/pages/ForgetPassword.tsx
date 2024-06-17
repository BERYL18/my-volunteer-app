import { IonPage, IonContent, IonItem, IonText, IonCard, IonCardContent, IonList, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import SignupHeader from '../components/SignupHeader';

const ForgetPassword = () => {
    const history = useHistory();
    
    const handleBack = () => {
      history.push('/sign-in');
   };
  
    return (
      <IonPage>
        <IonContent>
        <SignupHeader title="Reset" handleBack={handleBack} />
        
          <div className="sigup_form">
            <IonItem lines='none'>
    <IonText color='new' >Please Enter email to reset password </IonText>
  </IonItem>
          <IonCard>
        
        <IonCardContent>
          <IonList>
           
       

        <IonItem  >
            <IonInput label="Email" labelPlacement="floating"  type='email'></IonInput>
        </IonItem>

  
          </IonList>
        </IonCardContent>
      </IonCard>
         
          <IonButton size="large" color="warning" >
            Sign Up
          </IonButton>
        </div>
        </IonContent>
      </IonPage>
    )

}

export default ForgetPassword