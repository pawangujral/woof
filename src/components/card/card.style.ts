import styled from 'styled-components';

export const FigureCard = styled.figure<{ width: string }>`
  display: inline-block;
  margin: 0;
  max-width: ${({ width }) => width};
  padding: 0;
`;
