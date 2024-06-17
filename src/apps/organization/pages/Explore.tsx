import {
  IonAlert,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonSearchbar,
  IonText,
  IonTitle,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { Space, Card, Button, Avatar, FloatButton } from "antd";
import Meta from "antd/es/card/Meta";
import { CommentOutlined, HeartOutlined } from '@ant-design/icons';


const Explore = () => {
  const history = useHistory();
 
  const [showAlert, setShowAlert] = useState(false);
  
  return (
    <>  
      
      <IonContent  >
    

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
          <div color="warning" style={{position:"sticky", top:10}}>
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
        </div>

      </IonHeader>
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
        <FloatButton.BackTop />
        </div>

      </IonContent>
      
    </>
  );
};

export default Explore;
