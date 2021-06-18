import LoaderImage from '_/assets/images/landing.png';
import NotFoundImage from '_/assets/images/notfound.png';
import ReadyImage from '_/assets/images/ready.png';
import * as React from 'react';

import { FigureCard } from './thumbnail.style';

interface PlaceHolderProps {
  alt: string;
  loading?: 'eager' | 'lazy';
  src: string;
  width: string;
}

const Thumbnail: React.FC<PlaceHolderProps> = ({
  src,
  width,
  loading = 'eager',
  alt,
}: PlaceHolderProps): JSX.Element => {
  const renderImage = (): JSX.Element | string => {
    switch (src) {
      case 'landing':
        return LoaderImage;
      case 'notfound':
        return NotFoundImage;
      case 'ready':
        return ReadyImage;
      default:
        return src;
    }
  };

  return (
    <FigureCard width={width}>
      <img src={renderImage()} loading={loading} alt={alt} />
    </FigureCard>
  );
};

export default React.memo(Thumbnail);
