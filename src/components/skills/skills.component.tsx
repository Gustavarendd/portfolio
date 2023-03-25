import {
  Container,
  HTMLLogo,
  CSSLogo,
  JSLogo,
  ReactLogo,
  ImageContainer,
  SkillText,
} from './skills.styles';

const Skills = () => {
  return (
    <Container>
      <h4>Skills</h4>
      <ImageContainer>
        <HTMLLogo />
        <SkillText>HTML</SkillText>
      </ImageContainer>
      <ImageContainer>
        <CSSLogo />
        <SkillText>CSS</SkillText>
      </ImageContainer>
      <ImageContainer>
        <JSLogo />
        <SkillText>JavaScript</SkillText>
      </ImageContainer>
      <ImageContainer>
        <ReactLogo />
        <SkillText>React</SkillText>
      </ImageContainer>
    </Container>
  );
};

export default Skills;
