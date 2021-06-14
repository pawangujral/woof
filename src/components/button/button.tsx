import * as React from 'react';
import { ButtonWrapper, LinkWrapper } from './button.style';

interface props {
  color: string;
  component?: string;
  handleOnClick?: (data: any) => void;
  text: string;
  variant?: string;
  path?: string;
}

const Button: React.FC<props> = ({
  color,
  handleOnClick,
  text,
  variant = 'filled',
  component = 'button',
  path = '/',
}: props) => {
  const renderAction = () => {
    if (component === 'link') {
      return (
        <LinkWrapper color={color} variant={variant} to={path}>
          {text}
        </LinkWrapper>
      );
    }

    return (
      <ButtonWrapper
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
};

export default Button;
