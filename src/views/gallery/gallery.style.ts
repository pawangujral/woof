import styled from 'styled-components';

export const ListContainer = styled.section`
  padding: var(--base-spacing);
`;

export const List = styled.div`
  display: grid;
  grid-gap: var(--base-spacing);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  list-style: none;
  margin: 0;
  padding: 0;

  figure {
    border-radius: var(--base-radius);
    height: 200px;
    overflow: hidden;
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;

    figure {
      height: auto;
    }
  }
`;

export const Loader = styled.img`
  height: 100%;
  left: 0;
  opacity: 0.7;
  position: absolute;
  top: 0;
  width: 100%;
`;
