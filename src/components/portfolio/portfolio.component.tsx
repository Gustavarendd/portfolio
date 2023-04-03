import { useState } from 'react';

import PortfolioCard from '../portfolio-card/portfolio-card.component';
import {
  PortfolioContainer,
  Header,
  Container,
  ProjectsContainer,
} from './portfolio.styles';
import { Button, BUTTON_TYPES } from '../button/button.component';

const projects = {
  project1: {
    name: 'Clothing web-shop',
    description:
      'An e-commerce website created using React, TypeScript, Stripe and Firebase.',
    imageUrl: 'images/crown-app.png',
    liveUrl: 'https://jade-licorice-23a528.netlify.app/',
    codeUrl: 'https://github.com/Gustavarendd/crown-app',
  },

  project2: {
    name: 'Share My Place',
    description:
      'An app that lets you find your current location, and share a link to show where you are.',
    imageUrl: 'images/share-my-place.png',
    liveUrl: 'https://gustavarendd.github.io/find-my-place/',
    codeUrl: 'https://github.com/Gustavarendd/find-my-place',
  },
  project3: {
    name: 'To Do List',
    description:
      'A simple To Do list, where you can drag list items from active to finished.',
    imageUrl: 'images/to-do-list.png',
    liveUrl: 'https://gustavarendd.github.io/to-do-list/',
    codeUrl: 'https://github.com/Gustavarendd/to-do-list',
  },
  project4: {
    name: 'Portfolio Website',
    description: 'My Portfolio website. ',
    imageUrl: 'images/portfolio.png',
    liveUrl: 'https://gustavarendd.github.io/to-do-list/',
    codeUrl: 'https://github.com/Gustavarendd/portfolio',
  },
};

const Portfolio = () => {
  const [snapIndex, setSnapIndex] = useState(0);

  const moveToNextSnapPoint = () => {
    const container = document.getElementById('scroll-container');
    const snapPoint = container!.getElementsByClassName('snap-point');
    const nextIndex = snapIndex + 1;
    if (nextIndex >= snapPoint.length) {
      snapPoint[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setSnapIndex(0);
      return;
    }
    snapPoint[nextIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setSnapIndex(nextIndex);
  };
  const moveToPrevSnapPoint = () => {
    const container = document.getElementById('scroll-container');
    const snapPoint = container!.getElementsByClassName('snap-point');
    const prevIndex = snapIndex - 1;
    if (prevIndex < 0) {
      return;
    }
    snapPoint[prevIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setSnapIndex(prevIndex);
  };

  return (
    <PortfolioContainer>
      <Header>Project Portfolio</Header>
      <p>Here are my most recent projects.</p>
      <Container>
        <Button
          buttonType={BUTTON_TYPES.sideScrollButton}
          onClick={moveToPrevSnapPoint}
        >
          &#10094;
        </Button>
        <ProjectsContainer id="scroll-container">
          <PortfolioCard project={projects.project1} />

          <PortfolioCard project={projects.project2} />

          <PortfolioCard project={projects.project3} />

          <PortfolioCard project={projects.project4} />
        </ProjectsContainer>
        <Button
          buttonType={BUTTON_TYPES.sideScrollButton}
          onClick={moveToNextSnapPoint}
        >
          &#10095;
        </Button>
      </Container>
    </PortfolioContainer>
  );
};

export default Portfolio;
