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
          I come from Denmark and I am a determined self-taught frontend
          developer with knowledge in HTML, CSS, JavaScript and React. I am
          passionate about learning new technologies and creating sharp, useful
          sites.
        </p>
      </IntroTextContainer>
    </Fragment>
  );
};

export default Intro;
