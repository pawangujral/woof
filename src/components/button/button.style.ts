import { Link } from 'react-router-dom';
import styled from 'styled-components';

const handleVariant = (variant: string): string => {
  switch (variant) {
    case 'filled':
      return `
            color: var( --color-over-solid);
            background-color: var(--primary-color);
        `;
    case 'outlined':
      return `
            color: var(--primary-color);
            background-color: var( --color-over-solid);
            border: 1px solid var(--primary-color);
        `;
    case 'text':
      return `
            color: var(--primary-color);
            background-color: transparent;
            border: 0;
        `;
    default:
      return `
        color: var( --color-over-solid);
        background-color: var(--primary-color);
      `;
  }
};

export const ButtonWrapper = styled.button<{ variant: string }>`
  cursor: pointer;
  font-weight: 400;
  padding: 10px 30px;
  ${({ variant }: any): string => handleVariant(variant)};
`;

export const LinkWrapper = styled(Link)<{ variant: string }>`
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  margin-bottom: 20px;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  width: fit-content;
  ${({ variant }: any): string => handleVariant(variant)};
`;
