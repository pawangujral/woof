import styled from 'styled-components';

export const UploadContainer = styled.section`
  margin: var(--base-spacing) auto;
  padding: var(--base-spacing);
`;

export const ImageContainer = styled.figure<{ overlay: boolean }>`
  background: #f5f8fc;
  border-radius: var(--base-radius);
  margin: var(--base-spacing) auto;
  max-width: fit-content;
  overflow: hidden;
  padding: var(--base-spacing);
  position: relative;

  ${({ overlay }) =>
    overlay &&
    `&:before {
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

        } `}

  figcaption {
    margin-top: var(--base-spacing);
    span {
      color: var(--primary-color);
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

export const InputLabel = styled.label`
  background: var(--primary-color);
  color: var(--color-over-solid);
  cursor: pointer;
  display: block;
  margin: var(--base-spacing) auto;
  max-width: 200px;
  padding: var(--base-spacing);
  position: relative;
  width: 100%;

  input {
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
  }
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
