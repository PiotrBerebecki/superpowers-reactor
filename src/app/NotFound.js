import React from 'react';
import { ErrorCard } from './../styled';
import Main from './Main';

function NotFound() {
  return (
    <Main>
      <ErrorCard>
        Sorry, this page has not been found.
      </ErrorCard>
    </Main>
  );
}

export default NotFound;
