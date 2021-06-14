import * as React from 'react';
import Button from '_components/button';
import Card from '_components/card';

const NotFound: React.FC = () => {
  return (
    <main>
      <h1>
        Are you <span> lost?</span>
      </h1>
      <Card src="notfound" width="100%" alt="404 illustration" />
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
