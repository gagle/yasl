import React from 'react';
import styled from 'styled-components';
import Serp from './Serp/component';
import { GlobalStyle } from '../theme/styles';
import { ThemeProvider } from '../theme/ThemeContext/component';
import { InitAppProvider } from './Init/component';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <InitAppProvider>
      <ThemeProvider>
        <GlobalStyle />
        <AppContainer>
          <Serp />
        </AppContainer>
      </ThemeProvider>
    </InitAppProvider>
  );
}
