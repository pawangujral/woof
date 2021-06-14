import * as React from 'react';
import PlaceHolder from '_components/placeholder';
import useLazy from '_hooks/useLazy';
import useToasts from '_hooks/useToasts';
import {
  DOGS_API_ENDPOINT_BREED_SINGLE,
  ERROR_NO_COLLECTION,
} from '_utils/constants';
import { List, ListContainer, LoadMoreBtn } from './gallery.style';

interface GalleryProps {
  breed: string;
}

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
        `${DOGS_API_ENDPOINT_BREED_SINGLE}/${breed}/images/random/2`,
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
        {collection.map((item: string, index: number) => (
          <PlaceHolder
            key={index}
            src={item}
            loading="lazy"
            alt={`dog ${index}`}
            width="100%"
          />
        ))}
      </List>
      {isLoading && <p>loading more Images.....</p>}
      <LoadMoreBtn ref={loadMoreRef}>load more</LoadMoreBtn>
    </ListContainer>
  );
};

export default React.memo(Gallery);
