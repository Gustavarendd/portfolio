import styled from 'styled-components';
import { ReactComponent as htmlSVG } from '../../assets/Logos/html.svg';
import { ReactComponent as cssSVG } from '../../assets/Logos/css.svg';
import { ReactComponent as jsSVG } from '../../assets/Logos/js.svg';
import { ReactComponent as reactSVG } from '../../assets/Logos/react.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const HTMLLogo = styled(htmlSVG)`
  max-height: 50px;
`;

export const CSSLogo = styled(cssSVG)`
  max-height: 50px;
`;

export const JSLogo = styled(jsSVG)`
  max-height: 50px;
`;

export const ReactLogo = styled(reactSVG)`
  max-height: 50px;
`;
