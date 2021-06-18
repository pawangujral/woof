import Button from '_/components/button';
import Thumbnail from '_/components/thumbnail';
import useLazy from '_/hooks/use-lazy';
import useToasts from '_/hooks/use-toasts';
import {
  DOGS_API_ENDPOINT_BREED_SINGLE,
  ERROR_NO_COLLECTION,
} from '_/utils/constants';
import * as React from 'react';

import { HelperText, List, ListContainer } from './gallery.style';

interface GalleryProps {
  breed: string;
}

const MAX_FETCH_COUNT: number = 10;

const Gallery: React.FC<GalleryProps> = ({
  breed,
}: GalleryProps): JSX.Element => {
  const loadMoreReference = React.useRef<HTMLButtonElement>(null);
  const onScreen = useLazy(loadMoreReference);
  const { addToast } = useToasts();
  const [collection, setCollection] = React.useState<string[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchAnimalData = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(
        `${DOGS_API_ENDPOINT_BREED_SINGLE}/${breed}/images/random/${MAX_FETCH_COUNT}`,
      );
      const { status, message } = await response.json();

      if (status === 'error') {
        throw new Error(message);
      }

      if (!message.length) {
        throw new Error(ERROR_NO_COLLECTION);
      }

      setCollection(previousState => [...previousState, ...message]);
    } catch (error) {
      addToast({ message: error.message, variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect((): void => {
    fetchAnimalData();
  }, [breed, onScreen]);

  if (!isLoading && !collection.length) {
    <HelperText>Oops not able to find anything for you</HelperText>;
  }

  return (
    <ListContainer>
      <h2>
        Show more <span>love</span>
      </h2>

      <List>
        {collection.length &&
          React.Children.toArray(
            collection.map((item: string, index: number) => (
              <Thumbnail
                src={item}
                loading="lazy"
                alt={`dog ${index}`}
                width="100%"
              />
            )),
          )}
      </List>

      {isLoading && <p>loading more Images.....</p>}
      <Button ref={loadMoreReference} variant="text" text="load more" />
    </ListContainer>
  );
};

export default React.memo(Gallery);
