import Button from '_components/button';
import Thumbnail from '_components/thumbnail';
import * as React from 'react';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <main>
      <h1>
        Are you <span> lost?</span>
      </h1>
      <Thumbnail src="notfound" width="100%" alt="404 illustration" />
      <p>what to next ?</p>
      <Button
        color="primary"
        variant="filled"
        component="link"
        path="/"
        text="Go Back"
      />
    </main>
  );
};

export default NotFound;
