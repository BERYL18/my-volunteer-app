import { IonButton, IonContent, IonCard,
  IonCardContent,
  IonList,
  IonItem, IonPage, IonText, 
  IonInput,
  IonTextarea,
  IonSpinner} from '@ionic/react';
import { Space, message } from 'antd';
import { useHistory } from 'react-router';
import VolunteerismInput from '../../../components/VolunteerismInput';
import LocalStorage from '../../../helpers/storage'
import SignupHeader from '../components/SignupHeader';
import { useState } from 'react';
import Supabase from '../utils/supabase';
import { CreateOrganization } from '../api/api';

const SignUpOrganization = () => {
  const [selectedVolunteerismField, setSelectedVolunteerismField]= useState<Array<string>>([])
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [form, setForm]= useState<{
    name:string,
    email:string,
    password:string,
    confirm_password:string,
    phone:string,
    description:string,
    location: string
  }>({
    name: "",
    email: "",
    confirm_password: "",
    password:"",
    location: "",
    description: "",
    phone: ""
  })
 
  const handleBack = () => {
     history.push('/user-role');
  };
  const handleSignin = () => {
    history.push('/sign-in');
  };

    const switcher= async()=>{
        setIsLoading(true)
        console.log(form)
        if(form.password===form.confirm_password){
          const response= await Supabase.signUp(form.email, form.password)
          if(response){
          
            const data={
              description: form.description,
              email: form.email,
              location: form.location,
              name: form.name,
              phone: form.phone,
              field: selectedVolunteerismField,
              id: response
            }
            const response2= await CreateOrganization(data)
            if(response2.id){
              LocalStorage.setApp("organization")
              document.dispatchEvent(new Event("changeApp"))
              location.assign("/")
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
    
  return (
    <IonPage>
    <IonContent>
    <SignupHeader title="Sign Up" handleBack={handleBack} />

      <div className="sigup_form">
        <IonItem lines='none'>
<IonText color='new' >Sign up as an Organization</IonText>
</IonItem>
      
    
 <IonCard>  
 <IonCardContent>
      
      <Space direction='vertical' size='small'>
        
        <IonItem button  >
        <IonInput color='new' name='name' label="Organization Name" type='text' labelPlacement="floating" 
        onIonChange={(e)=>{
          setForm((prev)=>{
            return {...prev, name:e.detail.value}
          })
        }}
        ></IonInput>
    </IonItem>


    <IonItem button  >
        <IonInput color='new' name='email' label="Email" type='email' labelPlacement="floating"
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

    <VolunteerismInput next={(values)=> setSelectedVolunteerismField(values)}/>

 
          <IonItem button  >
            <IonTextarea label="Please describe your organization" color='new'  labelPlacement="floating" name='description' 
            onIonChange={(e)=>{
              setForm((prev)=>{
                return {...prev, description:e.detail.value}
              })
            }}
            ></IonTextarea>
          </IonItem>
         
          <IonItem button  >
        <IonInput color='new' name='password' label="Password" labelPlacement="floating" type='password' 
        onIonChange={(e)=>{
          setForm((prev)=>{
            return {...prev, password:e.detail.value}
          })
        }}
        ></IonInput>
    </IonItem>
    <IonItem button  >
        <IonInput color='new' name='confirm_password'  label="Confirm Password" labelPlacement="floating" placeholder="Enter the Password above" type='password'
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
        <IonButton size='large' color='warning' expand='block' onClick={switcher}  >
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

export default SignUpOrganization