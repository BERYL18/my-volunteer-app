import { IonAlert, IonAvatar, IonButton, IonContent, IonIcon, IonItem, IonPage, IonSpinner, IonText } from '@ionic/react'
import { Avatar, Button, Card, Space } from 'antd'
import { useEffect, useState } from 'react'
import { CommentOutlined, HeartOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import { pencilOutline } from 'ionicons/icons';
import post from '../../../helpers/axios';




const Profile = () => {
  
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

      useEffect(() => {
      const fetchUser = async () => {
          try {
              const userData = JSON.parse(localStorage.getItem('user') || '{}');
                 
              if (userData.id) {
                  const response = await post.get(`user/${userData.id}`);
                  if (response.data) {
                      setUser(response.data);
                     
                  }
              }
          } catch (error) {
              console.error('Error fetching user data:', error);
          }
      };

      fetchUser();
      setLoading(false);
  }, []);

  if (!user) {
      return <div><IonSpinner color='new'></IonSpinner></div>;

  }
  
    
  
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
      <IonText>{user.username}</IonText>
    </IonItem>
      </Space>
  </div>

    <div className='rounded_div'>

    
      <Space direction='vertical' size='large' >

      <IonItem>
      <IonText>{user.email}</IonText>
    </IonItem>

    <IonItem>
      <IonText>{user.description}</IonText>
    </IonItem>


       
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