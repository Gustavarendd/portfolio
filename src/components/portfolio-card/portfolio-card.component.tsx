import { useEffect, useState, FC } from 'react';

import {
  ProjectContainer,
  PortfolioImage,
  ButtonContainer,
} from './portfolio-card.styles';
import { Button, BUTTON_TYPES } from '../button/button.component';

type PortfolioCardProps = {
  project: {
    name: string;
    description: string;
    imageUrl: string;
    liveUrl: string;
    codeUrl: string;
  };
};

const PortfolioCard: FC<PortfolioCardProps> = ({ project }) => {
  const { name, description, imageUrl, liveUrl, codeUrl } = project;
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ProjectContainer className="snap-point">
      <PortfolioImage src={imageUrl} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <ButtonContainer>
          <Button
            buttonType={BUTTON_TYPES.portfolio}
            onClick={() => {
              window.open(liveUrl, '_blank')!.focus();
            }}
          >
            {viewportWidth > 1250 ? 'See Live' : 'Live'}
          </Button>
          <Button
            buttonType={BUTTON_TYPES.portfolio}
            onClick={() => {
              window.open(codeUrl, '_blank')!.focus();
            }}
          >
            {viewportWidth > 1250 ? 'Source Code' : 'Code'}
          </Button>
        </ButtonContainer>
      </div>
    </ProjectContainer>
  );
};

export default PortfolioCard;
