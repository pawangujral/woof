import * as React from 'react';
import LoaderImage from '_assets/images/landing.png';
import NotFoundImage from '_assets/images/notfound.png';
import { FigureCard } from './card.style';

interface PlaceHolderProps {
  src: string;
  width: string;
  loading?: 'eager' | 'lazy';
  alt: string;
}

const PlaceHolder: React.FC<PlaceHolderProps> = ({
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
      default:
        return src;
    }
  };

  return (
    <FigureCard width={width}>
      <img src={renderImage()} loading={loading} alt={alt} />
      <figcaption></figcaption>
    </FigureCard>
  );
};

export default React.memo(PlaceHolder);
