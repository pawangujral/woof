import * as React from 'react';

const useLazy = (reference: unknown) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting),
  );

  React.useEffect(() => {
    if (!reference.current) {
      throw new Error('ref is not assigned');
    }

    observer.observe(reference.current);

    return () => {
      observer.disconnect();
    };
  }, [reference]);

  return isIntersecting;
};

export default useLazy;
