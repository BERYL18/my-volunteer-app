import { IonAlert, IonAvatar, IonButton, IonContent, IonIcon, IonItem, IonPage, IonText, IonTitle } from '@ionic/react'
import { Avatar, Card, Space, Typography } from 'antd';
import { notificationsOutline, pencilOutline } from 'ionicons/icons';
import { useState } from 'react';

const { Meta } = Card;

const ProfileVoln = () => {
  const { Paragraph } = Typography;
  const [editableStr, setEditableStr] = useState('Enter your bio here');
  const [showAlert, setShowAlert] = useState(false);
  return (
    <IonPage>
      
    <IonContent color='warning'>
    <IonItem lines="none">

      <IonButton fill='clear' slot="end" color="new"  onClick={() => setShowAlert(true)} >
            <IonIcon
             
              icon={pencilOutline} 
              size="medium"
              color="new"
              slot='end'
            />Edit profile</IonButton>
            <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Coming soon'}
        subHeader={'This feature is currently in development.'}
        buttons={['OK']}
      />
          </IonItem>

    
   <div className="justify_center">
   
   <Space direction='vertical' size='large' >
    <IonItem lines='none'>
    <IonAvatar className='profile_img'>
        <img  alt="user's profile" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
      </IonItem>
    <IonItem lines='none'>
      <IonText>User Name</IonText>
    </IonItem>
      </Space>
  </div>

    <div className='rounded_div'>

    
      <Space direction='vertical' size='large' >

       <Paragraph style={{
        paddingLeft:'5rem', fontSize:'15px', width:'100%',
       }} editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph>
      
      <IonItem lines='none'  >
       <IonText style={{ fontSize:"20px"}}> Volunteered with </IonText>
       </IonItem>
         
       <Card style={{ width:"80dvw"}} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Organization's Name"
          description="Title of the opportunity"
        />
        
        </Card>
      </Space>

</div>


    </IonContent>
    </IonPage>
  )
}

export default ProfileVoln