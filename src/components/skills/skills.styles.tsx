import styled from 'styled-components';
import { ReactComponent as htmlSVG } from '../../assets/Logos/html.svg';
import { ReactComponent as cssSVG } from '../../assets/Logos/css.svg';
import { ReactComponent as jsSVG } from '../../assets/Logos/js.svg';
import { ReactComponent as reactSVG } from '../../assets/Logos/react.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  position: fixed;
  min-width: 180px;
  margin-top: 5rem;
  margin-left: 1rem;
  background-color: #dadada;
  border-radius: 15px;
  box-shadow: 0px 5px 15px grey;
  transition: all 0.4s linear;
  overflow: hidden;
  z-index: 20;
  @media screen and (max-width: 1400px) {
    min-width: 4rem;
  }
  @media screen and (max-width: 800px) {
    margin-top: 4rem;
    margin-left: 0.7rem;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 2rem;
  width: 100%;

  @media screen and (max-width: 1400px) {
    justify-content: center;
    padding-left: 0;
    gap: 0;
  }
`;

export const HTMLLogo = styled(htmlSVG)`
  max-height: 50px;
  max-width: 50px;
`;

export const CSSLogo = styled(cssSVG)`
  max-height: 50px;
  max-width: 50px;
`;

export const JSLogo = styled(jsSVG)`
  max-height: 50px;
  max-width: 50px;
`;

export const ReactLogo = styled(reactSVG)`
  max-height: 50px;
  max-width: 50px;
`;

export const SkillText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
