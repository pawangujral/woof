import * as React from 'react';
import Button from '_components/button';
import PlaceHolder from '_components/placeholder';

const NotFound: React.FC = () => {
  return (
    <main>
      <h1>
        Are you <span> lost?</span>
      </h1>
      <PlaceHolder illus="notfound" />
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
