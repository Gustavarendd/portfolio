import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';
import { ReactComponent as upArrowSVG } from '../../assets/Logos/up-arrow.svg';

export const BaseButton = styled.button`
  min-width: 200px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const SentMessageButton = styled(BaseButton)`
  background-color: #00bc1f;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #0ac10d;
    color: #000000;
    border: none;
  }
`;

export const PortfolioButton = styled(BaseButton)`
  font-size: 15px;
  height: 30px;
  min-width: 45%;
`;

export const SideScrollButton = styled(BaseButton)`
  height: 100px;
  width: 10px;
  min-width: 5%;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.1);
  color: black;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

export const BackToTopButton = styled(BaseButton)`
  width: 50px;
  height: 50px;
  min-width: 0;
  border-radius: 50px;
  position: fixed;
`;
