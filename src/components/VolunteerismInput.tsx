import React, { useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import SelectedVolunteerism from './SelectedOption';
import { volunteerismOptions } from '../helpers/constants';


type Fields={
  next: (any)=>void
}

const VolunteerismInput: React.FC<Fields> = ({next }) => {
    
  const handleVolunteerismChange = (event: CustomEvent<{ value: string[] }>) => {
    setSelectedVolunteerism(event.detail.value);
    next(event.detail.value);
  };
  const [selectedVolunteerism, setSelectedVolunteerism] = useState<string[]>([]);

  return (
    <div>
      <IonItem>
      <IonSelect
        multiple
        value={selectedVolunteerism}
        onIonChange={handleVolunteerismChange}
        label='Field in Volunteerism'
        labelPlacement="floating"
        fill='outline'
        onIonBlur={()=> next(selectedVolunteerism)}
        selected-text='null'
      >

        {volunteerismOptions.map((option) => (
          <IonSelectOption  key={option} value={option} >
            {option}
          </IonSelectOption>
        ))}
      </IonSelect>
  </IonItem>
  <SelectedVolunteerism selectedVolunteerism={selectedVolunteerism} />
   </div> 
  );
};

export default VolunteerismInput;