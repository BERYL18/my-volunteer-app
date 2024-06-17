import { IonContent, IonItem, IonButton, IonIcon, IonText } from '@ionic/react'
import { Form, Input, Upload, Button, Avatar, Card } from 'antd'
import { arrowBack } from 'ionicons/icons'
import React from 'react'
import { useHistory } from 'react-router'

const { Meta } = Card;
const ApplyNow = () => {
    const history = useHistory();
    const handleBackOp= () => {
      history.push("/explore-volunteer");
    };
    return (

        <>
         
    
    
         <IonContent>
    
         <IonItem lines='none'>
           <IonButton color='new' onClick={handleBackOp}>
            <IonIcon color='light' size='large'  icon={arrowBack} />
           </IonButton>
           </IonItem>
         <div className="sigup_form">
    
         <IonItem lines='none'>
            <IonText>Apply for this Opportunity</IonText>
         </IonItem>
          
         <Card style={{ width:"80dvw"}} >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Organization's Name"
          description="Title of the opportunity"
        />
        </Card>
            <Form style={{marginTop:"80px"}}>


          <Form.Item
          label="Why do want to participate??"
          name="description"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input.TextArea />
        </Form.Item>

       

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit" size='large'>
              Submit
            </Button>
        </Form.Item>

            </Form>
            </div>
         </IonContent>
        
    
    
         </>
    
      )
}

export default ApplyNow