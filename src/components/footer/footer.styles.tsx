import styled from 'styled-components';

import { ReactComponent as linkedinSVG } from '../../assets/Logos/linkedin.svg';
import { ReactComponent as githubSVG } from '../../assets/Logos/github.svg';
import { ReactComponent as phoneSVG } from '../../assets/Logos/phone.svg';
import { ReactComponent as emailSVG } from '../../assets/Logos/email.svg';
import { ReactComponent as locationSVG } from '../../assets/Logos/location.svg';

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: #d0d0d0;
  box-shadow: 0px 2px 15px 0px grey;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin-top: 1rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
`;

export const ContactInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 7rem;
  justify-content: center;
`;

export const TextBox = styled.p`
  margin: 0;
`;

export const LinkedInSVG = styled(linkedinSVG)`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
export const GitHubSVG = styled(githubSVG)`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const PersonalInfoBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const PhoneSVG = styled(phoneSVG)`
  width: 25px;
  height: 25px;
`;
export const EmailSVG = styled(emailSVG)`
  width: 25px;
  height: 25px;
`;
export const LocationSVG = styled(locationSVG)`
  width: 25px;
  height: 25px;
`;
