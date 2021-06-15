import * as styled from 'styled-components';
import LoaderImage from '_assets/images/bg.svg';

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --app-width: 768px;
    --app-break-point: 576px;
    --primary-font: 'Ubuntu', sans-serif;
    --base-font-size: 14px;
    --base-spacing: 15px;
    --base-radius: 12px;
    --light-background-color: #f5f8fc;
    --box-background-color: #fff;
    --primary-color: #5a38fc;
    --color-over-solid: #fff;
    --accent-color: #c5c6ca;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: var(--light-background-color);
    background-image: url(${LoaderImage});
    background-repeat: repeat;
    font-family: var(--primary-font);
    font-size: var(--base-font-size);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  main {
    background: var(--box-background-color);
    border: 1px dashed var(--accent-color);
    border-radius: var(--base-radius);
    margin: 50px auto;
    max-width: var(--app-width);
    text-align: center;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
    margin: 30px 0 15px 0;

    span {
      color: var(--primary-color);
      font-weight: 700;
    }
  }
`;

export default GlobalStyle;
