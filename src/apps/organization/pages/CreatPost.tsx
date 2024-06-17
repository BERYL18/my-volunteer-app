import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonSegment, IonSegmentButton, IonText, IonTitle, IonToolbar } from '@ionic/react'
import { Button, Form, Input, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { FormContext } from 'antd/es/form/context';
import { useHistory } from 'react-router';
import { CreatePostAsync } from '../store/thunks/PostThunks';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';


const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const CreatPost = () => {
  
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    // Call the CreatePostAsync thunk with the user input
    await dispatch(CreatePostAsync(values));
    // Clear the input fields
    form.resetFields();
  };

  const history = useHistory();
  const handleBack= () => {
    history.push("/opportunity");
  };


  return (

    <>
     <IonContent style={{overflow:"hidden"}}>

        <IonHeader>
          <div className="page_header">
            <IonItem lines='none'></IonItem>
          <IonItem lines='none'>
          <IonTitle>Create Post</IonTitle></IonItem>
          </div>

        
        </IonHeader>


    
        <div className="explore_content" style={{flexDirection:"column", alignItems:"end"}}>
          <IonItem lines='none' style={{marginTop:"-25px"}}>
            <IonButton color='new' size='large' onClick={handleBack}  >Opportunity</IonButton>
          </IonItem>

          <div className="sigup_form" style={{marginTop:"-45px"}}>

     <IonItem lines='none'>
        <IonText>Create a Post</IonText>
     </IonItem>
      

        <Form  form={form} onFinish={onFinish}>
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
          
              <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
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
        </div>

     </IonContent>
    


     </>

  )
}

export default CreatPost

function dispatch(arg0: AsyncThunkAction<any, any, AsyncThunkConfig>) {
  throw new Error('Function not implemented.');
}
