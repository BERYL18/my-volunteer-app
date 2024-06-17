import {
  IonAlert,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonSearchbar,
  IonTitle,
} from "@ionic/react";
import { Space, Avatar,Card, Button  } from "antd";
import { notificationsOutline } from "ionicons/icons";
import { useState } from "react";
import { CommentOutlined, HeartOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";

const { Meta } = Card;


const ExploreVoln = () => {
  const history = useHistory();
  const handleApplyNow= () => {
    history.push("/apply_now");
  };
  const [showAlert, setShowAlert] = useState(false);
  

  
  
  return (
    <>
      <IonHeader>
        <div className="page_header">
          <IonItem lines="none">
            <IonIcon
              onClick={() => setShowAlert(true)}
              icon={notificationsOutline}
              slot="end"
              size="large"
              color="new"
            />
            <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Coming soon'}
        subHeader={'This feature is currently in development.'}
        buttons={['OK']}
      />
          </IonItem>
          <IonItem lines="none">
            <IonSearchbar
              showCancelButton="focus"
              class="custom"
            ></IonSearchbar>
          </IonItem>
          <IonItem lines="none">
            <IonTitle>Explore</IonTitle>
          </IonItem> 
        </div>

      </IonHeader>

      <IonContent  >

        <div className="explore_content">
          <Space direction="vertical" size='middle'>
      
          <Card
    style={{ width: 380 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Button style={{backgroundColor:"#00b8d4", color:"#ffffff"}}  onClick={handleApplyNow}>Apply now</Button>
     
    ]}
    >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Organization's Name"
      // subTitle="This is the subtitle"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quas sequi. Molestias laborum accusantium ipsa ullam fuga tempore impedit et!"
    />
    </Card>
    <Card
    style={{ width: 380 }}
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
    </Card>

      </Space>
      
    </div>




      </IonContent>
    </>
  
  );

};

export default ExploreVoln;
