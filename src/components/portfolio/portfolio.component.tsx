import {
  PortfolioContainer,
  ProjectContainer,
  PortfolioImage,
  ButtonContainer,
} from './portfolio.styles';

import { Button, BUTTON_TYPES } from '../button/button.component';

const Portfolio = () => {
  const openLiveInNewTab = (): any => {
    window.open('https://jade-licorice-23a528.netlify.app/', '_blank')!.focus();
  };
  const openSourceInNewTab = (): any => {
    window.open('https://github.com/Gustavarendd/crown-app', '_blank')!.focus();
  };
  return (
    <PortfolioContainer>
      <h3>Portfolio:</h3>
      <ProjectContainer>
        <PortfolioImage
          src={require('../../assets/portfolio/crown-app.png')}
          alt="Crown-app"
        />
        <div>
          <h4>Clothing web-shop</h4>
          <p>An e-commerce website created using React and TypeScript</p>
          <ButtonContainer>
            <Button
              buttonType={BUTTON_TYPES.portfolio}
              onClick={openLiveInNewTab}
            >
              See Live
            </Button>
            <Button
              buttonType={BUTTON_TYPES.portfolio}
              onClick={openSourceInNewTab}
            >
              Source Code
            </Button>
          </ButtonContainer>
        </div>
      </ProjectContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
