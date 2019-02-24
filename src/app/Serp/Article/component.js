import React from 'react';
import styled from 'styled-components';

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-top: solid 1px #dcdddf;

  &:nth-child(1) {
    border-top: none;
  }
`;

const ImageCenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 130px;
`;

const Image = styled.img`
  max-width: 130px;
  max-height: 130px;
  object-fit: contain;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const Description = styled.span`
  padding-top: 10px;
`;

export default function Article({ title, imageUrl, description }) {
  return (
    <ArticleWrapper>
      <ImageCenteredWrapper>
        <Image src={imageUrl} />
      </ImageCenteredWrapper>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
    </ArticleWrapper>
  );
}
