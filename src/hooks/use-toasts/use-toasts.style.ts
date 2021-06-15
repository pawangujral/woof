import styled from 'styled-components';

const handleVariant = (variant: string): string => {
  switch (variant) {
    case 'success':
      return `
            background: #43a047;
        `;
    case 'error':
      return `
            color: #fff;
            background: #d32f2f;
        `;
    case 'warning':
      return `
            background: #ff9800;
        `;
    default:
      return `
                background: #2196f3;
            `;
  }
};

export const ToastContainer = styled.div`
  background: transparent;
  bottom: 15px;
  left: 15px;
  position: fixed;
`;

export const ToastMessage = styled.p<{
  key: number;
  variant: string | undefined;
}>`
  background: #2196f3;
  border-radius: 6px;
  color: #fff;
  margin: 0 0 10px 0;
  padding: 15px;
  ${({ variant }) => variant && handleVariant(variant)};
`;
