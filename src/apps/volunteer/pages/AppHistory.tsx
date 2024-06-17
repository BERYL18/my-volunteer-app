import { IonPage, IonHeader, IonContent, IonTitle, IonItem, IonButton } from '@ionic/react'
import { Avatar, Button, Card, Space } from 'antd'

const { Meta } = Card;
const AppHistory = () => {
   
  return (
    <IonPage>
      
    <IonHeader>
    <Space direction='vertical' className="page_header">
     <IonItem lines='none'></IonItem>
      <IonItem lines='none'><IonTitle>Status</IonTitle></IonItem> 
        </Space>
    </IonHeader>
    <IonContent>
      <div className="explore_content">
    <Card style={{ width:"100%", height:"18dvh", marginTop:"10px"  }} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Organization's Name"
          description="Title of the opportunity"
        />
        <Space size="large" style={{ marginTop:"1px", marginLeft:"15px"}}>
          
        <IonButton  color='danger'>
           Declined
          </IonButton>
        </Space>
        </Card>

        <Card style={{ width:"100%", height:"18dvh", marginTop:"10px"  }} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Organization's Name"
          description="Title of the opportunity"
        />
        <Space size="large" style={{ marginTop:"1px", marginLeft:"15px"}}>
          
          <IonButton  color='success'>
           Accepted
          </IonButton>
        </Space>
        </Card>
        <Card style={{ width:"100%", height:"18dvh", marginTop:"10px" }} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Organization's Name"
          description="Title of the opportunity"
        />
        <Space size="large" style={{ marginTop:"1px", marginLeft:"15px"}}>
          
          <IonButton  color='warning'>
           Pending
          </IonButton>
        </Space>
        </Card>
        </div>
    </IonContent>
    </IonPage>
  )
}

export default AppHistory
