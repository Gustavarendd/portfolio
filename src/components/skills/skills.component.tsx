import { useState } from 'react';

import { Button, BUTTON_TYPES } from '../button/button.component';
import {
  Container,
  HTMLLogo,
  CSSLogo,
  JSLogo,
  ReactLogo,
  TSLogo,
  StyledLogo,
  NPMLogo,
  ImageContainer,
  SkillText,
  SkillsContainer,
} from './skills.styles';

const Skills = () => {
  const [isOpen, setIsOpen] = useState(true);

  const clickHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Container
      style={
        isOpen
          ? { width: '4rem', height: '520px' }
          : { width: '4rem', height: '3rem' }
      }
    >
      <Button buttonType={BUTTON_TYPES.skillsButton} onClick={clickHandler}>
        Skills
      </Button>
      <SkillsContainer
        style={isOpen ? { display: 'flex' } : { display: 'none' }}
      >
        <ImageContainer title="HTML">
          <HTMLLogo />
          <SkillText>HTML</SkillText>
        </ImageContainer>
        <ImageContainer title="CSS">
          <CSSLogo />
          <SkillText>CSS</SkillText>
        </ImageContainer>
        <ImageContainer title="JavaScript">
          <JSLogo />
          <SkillText>JavaScript</SkillText>
        </ImageContainer>
        <ImageContainer title="React">
          <ReactLogo />
          <SkillText>React</SkillText>
        </ImageContainer>
        <ImageContainer title="TypeScript">
          <TSLogo />
          <SkillText>TypeScript</SkillText>
        </ImageContainer>
        <ImageContainer title="Styled-Components">
          <StyledLogo />
          <SkillText>Styled-Components</SkillText>
        </ImageContainer>
        <ImageContainer title="NPM">
          <NPMLogo />
          <SkillText>NPM</SkillText>
        </ImageContainer>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
