import {
  FooterContainer,
  ImageContainer,
  LinkedInSVG,
  GitHubSVG,
} from './footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <ImageContainer>
        <LinkedInSVG />
        <GitHubSVG />
      </ImageContainer>
      <div>
        <p>Copyright Gustav Rasmussen</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
