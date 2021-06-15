import styled from 'styled-components';

export const FigureCard = styled.figure<{ width: string }>`
  display: inline-block;
  margin: 0;
  max-width: ${({ width }): string => width};
  padding: 0;
`;
