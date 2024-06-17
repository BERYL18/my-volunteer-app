import { IonContent, IonHeader, IonItem, IonTitle } from '@ionic/react'
import { Alert, Avatar, Button, Card, Space } from 'antd'
import React from 'react'

const { Meta } = Card;
const Applications = () => {
  return (
    <>
    
    <IonHeader>
    <div className="page_header">
      <IonItem lines='none'></IonItem>
      <IonItem lines='none'>
        <IonTitle>Application</IonTitle>
        </IonItem> 
      </div>
    </IonHeader>
    <IonContent>
      <div className="explore_content">

    <Card style={{ width:"100%", height:"15dvh" }} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="User's Name"
          description="Title of the opportunity"
        />
        <Space size="large" style={{ marginTop:"15px", marginLeft:"15px"}}>
          <Button size="middle" type='primary' >
            Accept
          </Button>
          <Button size="middle" danger ghost>
            Decline
          </Button>
        </Space>
        </Card>

        
        </div>
    </IonContent>
    </>
  )
}

export default Applications