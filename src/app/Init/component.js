import React from 'react';
import getInitAppData from './getInitAppData';

const InitAppContext = React.createContext('init-app');

export class InitAppProvider extends React.Component {
  state = {
    initData: null
  };

  async componentDidMount() {
    try {
      const initData = await getInitAppData();
      this.setState({
        initData
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { children } = this.props;
    const { initData } = this.state;

    if (!initData) {
      return <span>Loading...</span>;
    }

    return (
      <InitAppContext.Provider value={initData}>
        {children}
      </InitAppContext.Provider>
    );
  }
}

InitAppProvider.

export const InitAppConsumer = InitAppContext.Consumer;
