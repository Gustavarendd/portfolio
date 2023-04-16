import { Fragment } from 'react';
import {
  IntroContainer,
  ProfilePicture,
  IntroTextContainer,
} from './intro.styles';

const Intro = () => {
  return (
    <IntroContainer>
      <ProfilePicture
        src={require('../../assets/profilePicture-small.jpeg')}
        alt="Picture of me, Gustav"
      />
      <IntroTextContainer>
        <h3>Hi! My name is Gustav</h3>
        <p>
          I am a determined self-taught frontend developer with knowledge in
          HTML, CSS, JavaScript and React.
        </p>
      </IntroTextContainer>
    </IntroContainer>
  );
};

export default Intro;
