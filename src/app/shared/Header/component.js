import React from 'react';
import styled from 'styled-components';
import Menu from './Menu/component';
import Logo from './Logo/component';
import Background from './Background/component';
import Sections from './Sections/component';
import { ThemeConsumer } from '../../../theme/ThemeContext/component';
import { InitAppConsumer } from '../../Init/component';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY >= 400) {
      console.log(123);
    }
  }

  render() {
    return (
      <InitAppConsumer>
        {initData => (
          <ThemeConsumer>
            {({ color }) => (
              <HeaderWrapper>
                <Background background={initData.header.background}>
                  <Head>
                    <Menu color={color} />
                    <Logo
                      src={initData.header.logo.src}
                      size={initData.header.logo.size}
                    />
                  </Head>
                  <Sections names={initData.header.sections} />
                </Background>
              </HeaderWrapper>
            )}
          </ThemeConsumer>
        )}
      </InitAppConsumer>
    );
  }
}
