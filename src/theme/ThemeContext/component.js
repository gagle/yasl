import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { InitAppConsumer } from '../../app/Init/component';

const createMaterialTheme = color =>
  createMuiTheme({
    palette: {
      primary: {
        main: color
      }
    },
    typography: {
      useNextVariants: true
    }
  });

const ThemeContext = React.createContext('theme');

function buildTheme(initData) {
  return {
    color: initData.mainColor
  };
}

export class ThemeProvider extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <InitAppConsumer>
        {initData => {
          const theme = buildTheme(initData);
          return (
            <ThemeContext.Provider value={theme}>
              <MuiThemeProvider theme={createMaterialTheme(theme.color)}>
                {children}
              </MuiThemeProvider>
            </ThemeContext.Provider>
          );
        }}
      </InitAppConsumer>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
