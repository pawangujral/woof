import styled from 'styled-components';

export const UploadContainer = styled.section`
  margin: var(--base-spacing) auto;
  padding: var(--base-spacing);
`;

export const Subtitle = styled.p`
  span {
    color: var(--primary-color);
    font-weight: 700;
  }
`;

export const Loader = styled.img`
  border: 0;
  height: 100%;
  left: 0;
  opacity: 0.7;
  position: absolute;
  top: 0;
  width: 100%;
`;
