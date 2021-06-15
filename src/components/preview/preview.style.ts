import styled from 'styled-components';

export const PreviewContainer = styled.figure<{ overlay: boolean }>`
  background: #f5f8fc;
  border-radius: var(--base-radius);
  margin: var(--base-spacing) auto;
  max-width: fit-content;
  overflow: hidden;
  padding: var(--base-spacing);
  position: relative;

  ${({ overlay }): string =>
    overlay
      ? `&:before {
            content: 'abracadabra ...';
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 1;
            color: #fff;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;

        } `
      : ''}

  figcaption {
    margin-top: var(--base-spacing);
    span {
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;
