import { Fragment } from 'react';
import { ProfilePicture, IntroTextContainer } from './intro.styles';

const Intro = () => {
  return (
    <Fragment>
      <ProfilePicture
        src={require('../../assets/profilePicture.jpeg')}
        alt="Gustav"
      />
      <IntroTextContainer>
        <h3>Hi! My name is Gustav</h3>
        <p>
          I am a determined self-taught frontend developer with knowledge in
          HTML, CSS, JavaScript and React.
        </p>
      </IntroTextContainer>
    </Fragment>
  );
};

export default Intro;
