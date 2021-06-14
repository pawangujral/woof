import * as React from 'react';
import { InputLabel } from './input.style';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  disabled: boolean;
}

const Input: React.FC<InputProps & {
  ref: React.Ref<HTMLInputElement>;
}> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ handleChange, label, disabled }: InputProps, ref) => {
    return (
      <InputLabel disabled={disabled}>
        {label}
        <input
          type="file"
          ref={ref}
          onChange={handleChange}
          accept="image/*"
          disabled={disabled}
        />
      </InputLabel>
    );
  },
);

export default Input;
