import React from "react";
import { useHistory } from "react-router";
import { IonButton, IonIcon, IonItem, IonText } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
interface SignupHeaderProps {
  title: string;
  handleBack: () => void;
}

const SignupHeader: React.FC<SignupHeaderProps> = ({ title, handleBack }) => {
  const history = useHistory();
  const handleRole = () => {
    history.push("/user-role");
  };

  return (
    <div className="sign_top">
      <IonButton fill="clear" onClick={handleBack}>
        <IonIcon icon={arrowBackOutline} color="new" size="large" />
      </IonButton>

      <IonItem lines="none">
        <IonText color="new">{title}</IonText>
      </IonItem>
    </div>
  );
};

export default SignupHeader;
