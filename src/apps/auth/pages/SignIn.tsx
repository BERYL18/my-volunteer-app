import React, { useState } from "react";
import LocalStorage from "../../../helpers/storage";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import Supabase from "../utils/supabase";
import SignupHeader from "../components/SignupHeader";

const SignIn = () => {
  // const switcher=()=>{
  //     LocalStorage.setApp("organization")
  //     document.dispatchEvent(new Event("changeApp"))
  //     location.assign("/")
  // }
  const history = useHistory();
  const handleBack = () => {
    history.push('/user-role');
 };
  const switcher= async()=>{
    console.log(form)
    const response= await Supabase.signIn(form.email, form.password)
   
    
}

  const handleForget = () => {
    history.push("/forget-password");
  };

  const [form, setForm]= useState<{
    email:string,
    password:string,
  }>({
    email: "",
    password:"",
  })
 
  

  return (
    <IonPage>
      <IonContent>
      <SignupHeader title="Login" handleBack={handleBack} />

        <div className="sigup_form">
          <IonItem lines="none">
            <IonText color="new">Login into your account </IonText>
          </IonItem>
          <IonCard>
            <IonCardContent>
              <IonList>
                <IonItem button >
                  <IonInput
                    label="Enter Your email" 
                    name="email"
                    labelPlacement="floating" type="email"
                    onIonChange={(e)=>{
                      setForm((prev)=>{
                        return {...prev, email:e.detail.value}
                      })
                    }}
                 ></IonInput>
                </IonItem>

                <IonItem button >
                  <IonInput
                    label="Password" name="password"
                    labelPlacement="floating" type="password"
                    onIonChange={(e)=>{
                      setForm((prev)=>{
                        return {...prev, password:e.detail.value}
                      })
                    }}
                  ></IonInput>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
       

        <IonItem lines="none" >
          <IonButton fill="clear" onClick={handleForget}>
            {" "}
            Forgotten password?
          </IonButton>
        </IonItem>

       
          <IonButton size="large" color="warning" onClick={switcher}>
            Sign Up{" "}
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default SignIn;
