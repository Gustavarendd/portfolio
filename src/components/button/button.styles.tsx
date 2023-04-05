import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  /* min-width: 200px; */
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 1.5rem 0 1.5rem;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: all 300 ease-out; */

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
  /* min-width: 45%; */
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

export const skillsButton = styled(BaseButton)`
  width: 100%;
  height: 50px;
  min-width: 0;
  padding: 0;
  border-radius: 10px;
  background-color: #dadada;
  color: black;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
  }
`;
