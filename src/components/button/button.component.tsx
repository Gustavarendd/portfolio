import { FC, ButtonHTMLAttributes } from 'react';
import {
  BaseButton,
  SentMessageButton,
  PortfolioButton,
  ButtonSpinner,
  skillsButton,
  SideScrollButton,
} from './button.styles';

export enum BUTTON_TYPES {
  base = 'base',
  sentMessage = 'sentMessage',
  portfolio = 'portfolio',
  skillsButton = 'skillsButton',
  sideScrollButton = 'sideScrollButton',
}

const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.sentMessage]: SentMessageButton,
    [BUTTON_TYPES.portfolio]: PortfolioButton,
    [BUTTON_TYPES.skillsButton]: skillsButton,
    [BUTTON_TYPES.sideScrollButton]: SideScrollButton,
  }[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
