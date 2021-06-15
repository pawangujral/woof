import * as React from 'react';

import { ButtonWrapper, LinkWrapper } from './button.style';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  component?: 'button' | 'link';
  handleOnClick?: (data: unknown) => void;
  path?: string;
  text: string;
  variant?: string;
}

const Button: React.FC<ButtonProps & {
  ref?: React.Ref<HTMLButtonElement>;
}> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      handleOnClick,
      text,
      variant = 'filled',
      component = 'button',
      path = '/',
    }: ButtonProps,
    reference,
  ): JSX.Element => {
    const renderAction = (): JSX.Element => {
      if (component === 'link') {
        return (
          <LinkWrapper color={color} variant={variant} to={path}>
            {text}
          </LinkWrapper>
        );
      }

      return (
        <ButtonWrapper
          ref={reference}
          onClick={handleOnClick}
          color={color}
          variant={variant}
          type="button"
        >
          {text}
        </ButtonWrapper>
      );
    };

    return renderAction();
  },
);

export default Button;
