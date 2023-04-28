import { InputHTMLAttributes, FC } from 'react';

import { InputContainer, InputField, InputLabel } from './form-input.styles';

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<InputProps> = ({ label, ...otherProps }) => {
  return (
    <InputContainer>
      <InputField {...otherProps} />
      <InputLabel
        htmlFor={otherProps.name}
        shrink={Boolean(
          otherProps.value &&
            typeof otherProps.value === 'string' &&
            otherProps.value.length,
        )}
      >
        {label}
      </InputLabel>
    </InputContainer>
  );
};

export default FormInput;
