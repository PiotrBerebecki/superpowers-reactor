import React from 'react';

import { MainWrapper, MainContainer } from './../styled';

function Main({ children }) {
  return (
    <MainWrapper>
      <MainContainer>
        {children}
      </MainContainer>
    </MainWrapper>
  );
}

export default Main;
