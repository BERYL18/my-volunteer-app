import { IonButton, IonCard, IonCardContent, IonContent, IonInput, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonSpinner, IonText } from '@ionic/react'
import { useHistory } from 'react-router-dom';
import VolunteerismInput from '../../../components/VolunteerismInput';
import LocalStorage from '../../../helpers/storage'
import SignupHeader from '../components/SignupHeader';
import { Space, message } from 'antd';
import { CreateVolunteer } from '../api/api';
import { useState } from 'react';
import Supabase from '../utils/supabase';
import { skills } from '../../../helpers/constants';
import SelectedVolunteerism from '../../../components/SelectedOption';

const SignUpVolunteer = () => {
  const history = useHistory();
  const [selectedVolunteerism, setSelectedVolunteerism] = useState<string[]>([]);
  const [selectedVolunteerismField, setSelectedVolunteerismField]= useState<Array<string>>([])
  const [isLoading, setIsLoading] = useState(false);
  
  const handleBack = () => {
    history.push('/user-role');
 };

 const [form, setForm]= useState<{
  name:string,
  email:string,
  password:string, 
  confirm_password:string,
  phone:string,
  location: string
}>({
  name: "",
  email: "",
  confirm_password: "",
  password:"",
  location: "",
  phone: ""
})

const SkillsInput: React.FC = () => {
  
  const handleSkillsChange = (event: CustomEvent<{ value: string[] }>) => {
    setSelectedVolunteerism(event.detail.value);
  };

  return (
    <div className="box_to_select">
    <IonItem >

      <IonSelect
      label="Skills"
        multiple
        value={selectedVolunteerism}
        onIonChange={handleSkillsChange}
        labelPlacement="floating"
         selected-text='null'
      >
        {skills.map((skill) => (
          <IonSelectOption key={skill} value={skill}>
            {skill}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
    <SelectedVolunteerism selectedVolunteerism={selectedVolunteerism} />
    </div>
  );
};


const switcher= async()=>{
  setIsLoading(true)
  console.log(form)
  if(form.password===form.confirm_password){
    const response= await Supabase.signUp(form.email, form.password)
    if(response){
      const data={
        full_name:form.name,
        email: form.email,
        location: form.location,
        phone: form.phone,
        skills: selectedVolunteerism,
        field: selectedVolunteerismField,
        id: response
      }
      const response2= await CreateVolunteer(data)
      if(response2.id){
        LocalStorage.setApp("volunteer")
        document.dispatchEvent(new Event("changeApp"))
        location.assign("/explore-volunteer")

      }
    }else{
      message.error("Error Occurred")
      setIsLoading(false)
    }
  }
  else{
      message.error("Password does not match")
      setIsLoading(false)
  }
  
}
  const handleSignin = () => {
    history.push('/sign-in');
  };
  
  return (
    <IonPage>
      <IonContent>
      <SignupHeader title="Sign Up" handleBack={handleBack} />
        <div className="sigup_form">
          <IonItem lines='none'>
            <IonText color='new' >Sign up as an Volunteer</IonText>
          </IonItem>
          
        <IonCard>
      
      <IonCardContent>
        <Space direction='vertical' size='small'>
        
          <IonItem >
          <IonInput color='new' label="User Name" name='name' type='text' labelPlacement="floating"
           onIonChange={(e)=>{
            setForm((prev)=>{
              return {...prev, name:e.detail.value}
            })
          }}
          ></IonInput>
      </IonItem>


      <IonItem button  >
          <IonInput color='new' name='email'  label="Email" type='email' labelPlacement="floating"
           onIonChange={(e)=>{
            setForm((prev)=>{
              return {...prev, email:e.detail.value}
            })
          }}
          ></IonInput>
      </IonItem>
      <IonItem button   >
          <IonInput color='new' name='phone'  label="Phone" labelPlacement="floating"  type='number'
           onIonChange={(e)=>{
            setForm((prev)=>{
              return {...prev, phone:e.detail.value}
            })
          }}
          ></IonInput>
      </IonItem>
      <IonItem button  >
          <IonInput color='new' name='location'  label="Location" type='text' labelPlacement="floating"
           onIonChange={(e)=>{
            setForm((prev)=>{
              return {...prev, location:e.detail.value}
            })
          }}
          ></IonInput>
      </IonItem>

   <SkillsInput />
  
   <VolunteerismInput next={(values)=> setSelectedVolunteerismField(values)}/>
     


      <IonItem button  >
          <IonInput  type='password' color='new'  name='password'  label="Password" labelPlacement="floating" placeholder="Password should be at least 6 characters" 
           onIonChange={(e)=>{
            setForm((prev)=>{
              return {...prev, password:e.detail.value}
            })
          }}
          ></IonInput>
      </IonItem>
      <IonItem button   >
          <IonInput type='password' color='new' name='confirm_password' label="Confirm Password" labelPlacement="floating" placeholder="Enter the Password above" 
           onIonChange={(e)=>{
            setForm((prev)=>{
              return {...prev, confirm_password:e.detail.value}
            })
          }}
          ></IonInput>
      </IonItem>
      </Space>
        
      </IonCardContent>
    </IonCard>
    <div >
          <IonButton size='large' color='warning'  onClick={switcher}   >
          {isLoading ? (
            <>
              <IonSpinner name="circles" />
              &nbsp;Loading
            </>
          ) : (
            'Sign Up'
          )}
            
             </IonButton>
        </div>   

        
<IonItem>
          <IonText>Already having an account? </IonText><IonButton  fill="clear"  onClick={handleSignin}> Login</IonButton>
</IonItem>

        </div>

        
      </IonContent>
    </IonPage>
  )
}

export default SignUpVolunteer
