import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { heart, chatbubble } from 'ionicons/icons';

interface Post {
  title: string;
  description: string;
  media: File | null;
  isVideo: boolean;
  likes: number;
  comments: Comment[];
}

interface Comment {
  author: string;
  text: string;
}

const ExploreContent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch posts from the backend or local storage
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const handleLike = (index: number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes++;
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleComment = (index: number, comment: Comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    
      <IonContent>
        <IonList>
          {posts.map((post, index) => (
            <IonItem key={index}>
              {post.isVideo ? (
                <video src={URL.createObjectURL(post.media!)} controls />
              ) : (
                <img src={URL.createObjectURL(post.media!)} alt={post.title} />
              )}
              <IonLabel>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>
                  <IonIcon icon={heart} />
                  {post.likes}
                  <IonIcon icon={chatbubble} />
                  {post.comments.length}
                </p>
                {post.comments.map((comment, commentIndex) => (
                  <p key={commentIndex}>
                    {comment.author}: {comment.text}
                  </p>
                ))}
                <IonButton onClick={() => handleLike(index)}>Like</IonButton>
                <IonButton
                  onClick={() => handleComment(index, { author: 'User', text: 'Nice post!' })}
                >
                  Comment
                </IonButton>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    
  );
};

export default ExploreContent;