import React from 'react';
import styled, { keyframes } from 'styled-components';
import LogoImage from '..//../assets/images/logo.png'; // Import your logo image

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90dvh;
  width: 100%;
  
`;

const LogoSpinner = styled.img`
  width: 180px;
  height: 180px;
  animation: ${rotate} 3s linear infinite;
`;

const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <LogoSpinner src={LogoImage} alt="Loading" />
    </LoadingWrapper>
  );
};

export default Loading;