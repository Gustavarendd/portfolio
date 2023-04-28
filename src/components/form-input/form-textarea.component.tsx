import { TextareaHTMLAttributes, InputHTMLAttributes, FC } from 'react';

import {
  MessageField,
  MessageFieldContainer,
  MessageFieldLabel,
} from './form-input.styles';

type TextAreaProps = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputHTMLAttributes<HTMLInputElement>;

const TextArea: FC<TextAreaProps> = ({ label, ...otherProps }) => {
  return (
    <MessageFieldContainer>
      <MessageField {...otherProps} />
      <MessageFieldLabel
        htmlFor={otherProps.name}
        shrink={Boolean(
          otherProps.value &&
            typeof otherProps.value === 'string' &&
            otherProps.value.length,
        )}
      >
        {label}
      </MessageFieldLabel>
    </MessageFieldContainer>
  );
};

export default TextArea;
