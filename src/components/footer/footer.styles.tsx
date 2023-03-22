import styled from 'styled-components';

import { ReactComponent as linkedinSVG } from '../../assets/Logos/linkedin.svg';
import { ReactComponent as githubSVG } from '../../assets/Logos/github.svg';

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: lightcoral;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
`;

export const LinkedInSVG = styled(linkedinSVG)`
  width: 100px;
  height: 100px;
`;
export const GitHubSVG = styled(githubSVG)`
  width: 100px;
  height: 100px;
`;
