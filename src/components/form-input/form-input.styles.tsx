import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';
const backgroundColor = 'lightgrey';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

type InputLabelProps = {
  shrink?: boolean;
};

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputLabel = styled.label<InputLabelProps>`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const InputField = styled.input`
  background: none;
  background-color: ${backgroundColor};
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 15px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const MessageFieldContainer = styled(InputContainer)``;
export const MessageFieldLabel = styled(InputLabel)``;

export const MessageField = styled.textarea`
  resize: none;
  background: none;
  background-color: ${backgroundColor};
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 15px 0;
  min-height: 200px;

  &:focus {
    outline: none;
  }
  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyles};
  }
`;
