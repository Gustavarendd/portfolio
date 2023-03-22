import {
  FooterContainer,
  ImageContainer,
  LinkedInSVG,
  GitHubSVG,
  PhoneSVG,
  EmailSVG,
  LocationSVG,
  PersonalInfoBox,
  ContactInfoBox,
  TextBox,
} from './footer.styles';

const openLinkedInInNewTab = (): any => {
  window
    .open('https://www.linkedin.com/in/gustav-rasmussen-390442262/', '_blank')!
    .focus();
};
const openGithubInNewTab = (): any => {
  window.open('https://github.com/Gustavarendd', '_blank')!.focus();
};

const Footer = () => {
  return (
    <FooterContainer>
      <ImageContainer>
        <LinkedInSVG onClick={openLinkedInInNewTab} />
        <GitHubSVG onClick={openGithubInNewTab} />
        <ContactInfoBox>
          <PersonalInfoBox>
            <PhoneSVG />
            <TextBox>+420 792361694</TextBox>
          </PersonalInfoBox>
          <PersonalInfoBox>
            <EmailSVG />
            <TextBox>gustavarend@me.com</TextBox>
          </PersonalInfoBox>
          <PersonalInfoBox>
            <LocationSVG />
            <TextBox>Prague, Czech Republic</TextBox>
          </PersonalInfoBox>
        </ContactInfoBox>
      </ImageContainer>
      <div>
        <p>©2023 Gustav Rasmussen</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
