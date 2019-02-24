import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  height: inherit;
`;

export default function Logo({ src, size }) {
  return (
    <LogoWrapper>
      <img src={src} width={size} />
    </LogoWrapper>
  );
}
