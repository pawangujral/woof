import styled from 'styled-components';

export const InputLabel = styled.label<{ disabled: boolean }>`
  background: var(--primary-color);
  border-radius: var(--base-radius);
  color: var(--color-over-solid);
  cursor: pointer;
  display: block;
  margin: var(--base-spacing) auto;
  max-width: 200px;
  opacity: ${({ disabled }): string => (disabled ? '0.1' : '1')};
  padding: var(--base-spacing);
  position: relative;
  width: 100%;

  input {
    cursor: pointer;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
