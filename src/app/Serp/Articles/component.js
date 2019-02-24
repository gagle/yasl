import React from 'react';
import styled from 'styled-components';
import { getArticles } from '../repository';
import Article from '../Article/component';

const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Articles extends React.Component {
  state = {
    articles: []
  };

  async loadArticles() {
    try {
      const articles = await getArticles();
      this.setState({
        articles
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.loadArticles();
  }

  render() {
    const { articles } = this.state;

    return (
      <ArticlesWrapper>
        {articles.map(article => {
          const { id, ...props } = article;
          return <Article key={id} {...props} />;
        })}
      </ArticlesWrapper>
    );
  }
}
