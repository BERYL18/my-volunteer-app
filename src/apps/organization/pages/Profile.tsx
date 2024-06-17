import { IonAlert, IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonText, IonTitle } from '@ionic/react'
import { Avatar, Button, Card, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { CommentOutlined, HeartOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import { pencilOutline } from 'ionicons/icons';
import supabase from '../../auth/utils/supabase';
import post from '../../../helpers/axios';




const Profile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     const fetchProfile = async () => {
//         setLoading(true);
//         const user = supabase.auth.user();
//         if (user) {
//             try {
               
//                 let { data: profileData, error } = await supabase
//                     .from('profiles')
//                     .select('*')
//                     .eq('id', user.id)
//                     .single();

//                 if (error) {
//                     console.error('Error fetching profile:', error);
//                 } else {
//                     setProfile(profileData);
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         }
//         setLoading(false);
//     };

//     fetchProfile();
// }, []);
// if (loading) return <div>Loading...</div>;
// if (!profile) return <div>No profile data</div>;

  
  
    
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
      


       
      <Card
                style={{ width: 350 }}
                cover={
                <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <HeartOutlined />,
                <CommentOutlined/>,
                

                ]}
                >
                <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Organization's Name"
                // subTitle="This is the subtitle"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quas sequi. Molestias laborum accusantium ipsa ullam fuga tempore impedit et!"
                />
                  <Space size="large" style={{ marginTop:"25px", marginLeft:"35px"}}>
                <Button size="middle" color='new' >
                  Edit
                </Button>
                <Button size="middle" danger ghost>
                 Delete
                </Button>
              </Space>
                </Card>
      </Space>
</div>


    </IonContent>
    </IonPage>
  )
}

export default Profile