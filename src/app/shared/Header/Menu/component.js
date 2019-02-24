import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  margin-left: 10px;
  fill: currentColor;
  color: ${props => props.color};
`;

export default function Menu({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      color={color}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Svg>
  );
}
