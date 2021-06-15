import * as React from 'react';
import LoaderImage from '_assets/images/landing.png';
import NotFoundImage from '_assets/images/notfound.png';
import ReadyImage from '_assets/images/ready.png';
import { FigureCard } from './thumbnail.style';

interface PlaceHolderProps {
  src: string;
  width: string;
  loading?: 'eager' | 'lazy';
  alt: string;
}

const Thumbnail: React.FC<PlaceHolderProps> = ({
  src,
  width,
  loading = 'eager',
  alt,
}: PlaceHolderProps) => {
  const renderImage = () => {
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
