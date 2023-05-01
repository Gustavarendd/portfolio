import { Container, AboutContainer, Picture } from './about.styles';

const About = () => {
  return (
    <Container>
      <AboutContainer>
        <h3>About Me</h3>
        <p>
          I come from Denmark and I am now living in Prague, Czech Republic.
          Since 2013 I have been working onboard sailing ships around the world.
          Most recently I worked onboard a Danish school-ship, teaching the
          basic education for trainees who want to start working onboard ships
          worldwide.
        </p>
      </AboutContainer>
      <Picture
        src={require('../../assets/Danmark-small.jpg')}
        srcSet={`${require('../../assets/Danmark-small.jpg')} 500w, ${require('../../assets/Danmark-medium.jpg')} 1000w`}
        alt="Sailing Ship"
      />
    </Container>
  );
};

export default About;
