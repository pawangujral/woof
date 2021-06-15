import * as React from 'react';

import { InputLabel } from './input.style';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  disabled: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Input: React.FC<InputProps & {
  ref: React.Ref<HTMLInputElement>;
}> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ handleChange, label, disabled }: InputProps, reference): JSX.Element => {
    return (
      <InputLabel disabled={disabled}>
        {label}
        <input
          type="file"
          ref={reference}
          onChange={handleChange}
          accept="image/*"
          disabled={disabled}
        />
      </InputLabel>
    );
  },
);

export default Input;
