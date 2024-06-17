import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import { camera, videocam } from 'ionicons/icons';

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState<File | null>(null);
  const [isVideo, setIsVideo] = useState(false);

  const handleSubmit = () => {
    // Logic to submit the post, including the title, description, and media file
    // You can use the Ionic Storage API or a backend service to save the post
    console.log('Submitting post:', { title, description, media, isVideo });
  };

  const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setMedia(file);
      setIsVideo(file.type.startsWith('video/'));
    }
  };

  return (
  

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput
                placeholder="Title"
                value={title} name='title'
                onIonChange={(e) => setTitle(e.detail.value!)}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTextarea
                placeholder="Description"
                value={description}
                onIonChange={(e) => setDescription(e.detail.value!)}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                onClick={() => {
                  document.getElementById('media-input')?.click();
                }}
              >
                <IonIcon slot="start" icon={isVideo ? videocam : camera} />
                {isVideo ? 'Upload Video' : 'Upload Image'}
              </IonButton>
              <input
                id="media-input"
                type="file"
                accept={isVideo ? 'video/*' : 'image/*'}
                onChange={handleMediaUpload}
                style={{ display: 'none' }}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={handleSubmit}>Submit</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    
  );
};

export default CreatePost;