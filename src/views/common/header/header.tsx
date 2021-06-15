import * as React from 'react';

import { HeaderContainer } from './header.style';

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderContainer>
      <h1>Woof Woof Magic</h1>
    </HeaderContainer>
  );
};

export default Header;
