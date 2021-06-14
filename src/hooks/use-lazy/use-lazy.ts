import * as React from 'react';

const useLazy = (ref: any) => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting),
  );

  React.useEffect(() => {
    if (!ref.current) throw Error('ref is not assigned');
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return isIntersecting;
};
export default useLazy;
