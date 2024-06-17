import { IonHeader, IonItem, IonTitle, IonContent, IonButton, IonText, IonIcon, IonSelect, IonSelectOption } from '@ionic/react'
import { Button, Form, Input, Select, Upload } from 'antd'
import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { arrowBack } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { skills } from '../../../helpers/constants';
import SelectedVolunteerism from '../../../components/SelectedOption';
const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
  
const Opportunity = () => {
    const history = useHistory();
    const handleBackOp= () => {
      history.push("/creatpost");
    };
    
    const [selectedVolunteerism, setSelectedVolunteerism] = useState<string[]>([]);
    const [selectedVolunteerismField, setSelectedVolunteerismField]= useState<Array<string>>([])
    
    const SkillsInput: React.FC = () => {

      const handleSkillsChange = (event: CustomEvent<{ value: string[] }>) => {
        setSelectedVolunteerism(event.detail.value);
      };
    
      return (
        <div className="box_to_select">
        
    
          <IonSelect
        
            multiple
            value={selectedVolunteerism}
            onIonChange={handleSkillsChange}
            labelPlacement="floating"
             selected-text='Choose'
          >
            {skills.map((skill) => (
              <IonSelectOption key={skill} value={skill}>
                {skill}
              </IonSelectOption>
            ))}
          </IonSelect>
        
        <SelectedVolunteerism selectedVolunteerism={selectedVolunteerism} />
        </div>
      );
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
            <IonText>Create an Opportunity for volunteers</IonText>
         </IonItem>
          
    
            <Form>

            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input!' }]}>
          <Input /> 
          </Form.Item>
          <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please input!' }]}>
          <Input /> 
          </Form.Item>

       

            <Form.Item label="Skills Required" name="skills" rules={[{ required: true, message: 'Please input!' }]}>
              <SkillsInput />
            </Form.Item>

        
            <Form.Item label="Upload" valuePropName="img" getValueFromEvent={normFile}>
              <Upload action="/upload.do" listType="picture-card">
                <button style={{ border: 0, background: 'none' }} type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
            </Form.Item>
        
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
              Submit
            </Button>
        </Form.Item>

            </Form>
            </div>
         </IonContent>
        
    
    
         </>
    
      )
}

export default Opportunity