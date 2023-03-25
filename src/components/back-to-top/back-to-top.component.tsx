import { Fragment } from 'react';
import { Button, BUTTON_TYPES } from '../button/button.component';
import { UpArrow } from './back-to-top.styles';

const BackToTopButton = () => {
  return (
    <Button buttonType={BUTTON_TYPES.backToTopButton}>
      <UpArrow />
    </Button>
  );
};

export default BackToTopButton;
