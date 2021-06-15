import * as React from 'react';
import Button from '_components/button';
import Thumbnail from '_components/thumbnail';
import useLazy from '_hooks/use-lazy';
import useToasts from '_hooks/use-toasts';
import {
  DOGS_API_ENDPOINT_BREED_SINGLE,
  ERROR_NO_COLLECTION,
} from '_utils/constants';
import { List, ListContainer } from './gallery.style';

interface GalleryProps {
  breed: string;
}

const MAX_FETCH_COUNT: number = 10;

const Gallery: React.FC<GalleryProps> = ({ breed }: GalleryProps) => {
  const loadMoreRef = React.useRef<HTMLButtonElement>(null);
  const onScreen = useLazy(loadMoreRef);
  const { addToast } = useToasts();
  const [collection, setCollection] = React.useState<string[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchAnimalData = async () => {
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
      setCollection(prevState => [...prevState, ...message]);
    } catch (err) {
      addToast({ message: err.message, variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAnimalData();
  }, [breed, onScreen]);

  return (
    <ListContainer>
      <h2>
        Show some <span>love</span> to them as well
      </h2>
      <List>
        {React.Children.toArray(
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
      <Button ref={loadMoreRef} variant="text" text="load more" />
    </ListContainer>
  );
};

export default React.memo(Gallery);
