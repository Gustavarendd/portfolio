import {
  Container,
  HTMLLogo,
  CSSLogo,
  JSLogo,
  ReactLogo,
  ImageContainer,
} from './skills.styles';

const Skills = () => {
  return (
    <Container>
      <h3>Skills:</h3>
      <ImageContainer>
        <HTMLLogo />
        <CSSLogo />
        <JSLogo />
        <ReactLogo />
      </ImageContainer>
    </Container>
  );
};

export default Skills;
