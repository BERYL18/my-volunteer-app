import React from 'react';

interface SelectedVolunteerismProps {
  selectedVolunteerism: string[];
}

const SelectedVolunteerism: React.FC<SelectedVolunteerismProps> = ({ selectedVolunteerism }) => {
  return (
    <div>
      <h2>Selected Options:</h2>
      <ul>
        {selectedVolunteerism.map((option, index) => (
          <li key={index} >{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedVolunteerism;