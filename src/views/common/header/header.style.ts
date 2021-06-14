import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  border-radius: 0;
  box-shadow: 0 0 12px var(--accent-color);
  color: var(--color-over-solid);
  padding: var(--base-spacing);
  text-align: center;
  text-transform: capitalize;

  h1 {
    font-size: 18px;
    margin: 0;
  }
`;
