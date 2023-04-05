import { useState } from 'react';

import { Button, BUTTON_TYPES } from '../button/button.component';
import {
  Container,
  HTMLLogo,
  CSSLogo,
  JSLogo,
  ReactLogo,
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
          ? { width: '4rem', height: '330px' }
          : { width: '4rem', height: '3rem' }
      }
    >
      <Button buttonType={BUTTON_TYPES.skillsButton} onClick={clickHandler}>
        Skills
      </Button>
      <SkillsContainer
        style={isOpen ? { display: 'flex' } : { display: 'none' }}
      >
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
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
