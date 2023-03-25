import { useState } from 'react';

import PortfolioCard from '../portfolio-card/portfolio-card.component';
import {
  PortfolioContainer,
  Container,
  ProjectsContainer,
  Project,
} from './portfolio.styles';
import { Button, BUTTON_TYPES } from '../button/button.component';

const project1 = {
  name: 'Clothing web-shop',
  description:
    'An e-commerce website created using React, TypeScript, Stripe and Firebase',
  imageUrl: 'images/crown-app.png',
  liveUrl: 'https://jade-licorice-23a528.netlify.app/',
  codeUrl: 'https://github.com/Gustavarendd/crown-app',
};

const Portfolio = () => {
  const [snapIndex, setSnapIndex] = useState(0);
  const container = document.getElementById('scroll-container');
  const snapPoints = container!.getElementsByClassName('snap-point');

  const moveToNextSnapPoint = () => {
    const nextIndex = snapIndex + 1;
    if (nextIndex >= snapPoints.length) {
      snapPoints[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setSnapIndex(0);
      return;
    }
    snapPoints[nextIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setSnapIndex(nextIndex);
  };
  const moveToPrevSnapPoint = () => {
    const prevIndex = snapIndex - 1;
    if (prevIndex < 0) {
      return;
    }
    snapPoints[prevIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setSnapIndex(prevIndex);
  };

  return (
    <PortfolioContainer>
      <h3>Project Portfolio</h3>
      <Container>
        <Button
          buttonType={BUTTON_TYPES.sideScrollButton}
          onClick={moveToPrevSnapPoint}
        >
          &#10094;
        </Button>
        <ProjectsContainer id="scroll-container">
          <Project className="snap-point">
            <PortfolioCard project={project1} />
          </Project>
          <Project className="snap-point">
            <PortfolioCard project={project1} />
          </Project>
          <Project className="snap-point">
            <PortfolioCard project={project1} />
          </Project>
          <Project className="snap-point">
            <PortfolioCard project={project1} />
          </Project>
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
