import {
  PortfolioContainer,
  ProjectContainer,
  PortfolioImage,
} from './portfolio.styles';

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <h3>Portfolio:</h3>
      <ProjectContainer>
        <PortfolioImage
          src={require('../../assets/portfolio/crown-app.png')}
          alt="Crown-app"
        />
        <div>
          <h4>Project</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </ProjectContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
