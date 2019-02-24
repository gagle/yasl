import React from 'react';
import styled from 'styled-components';
import Serp from './Serp/component';
import { GlobalStyle } from '../theme/styles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppContainer>
        <Serp />
      </AppContainer>
    </React.Fragment>
  );
}
