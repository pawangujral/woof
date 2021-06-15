import Thumbnail from '_components/thumbnail';
import useToasts from '_hooks/use-toasts';
import {
  DOGS_API_ENDPOINT_BREED_ALL,
  ERROR_DEFAULT_MESSAGE,
} from '_utils/constants';
import { flatReponse } from '_utils/utils';
import Gallery from '_views/gallery';
import Uploader from '_views/uploader';
import * as React from 'react';

const Main: React.FC = (): JSX.Element => {
  const { addToast } = useToasts();
  const [breedList, setBreedList] = React.useState<string[]>([]);
  const [hasPrediction, setPrediction] = React.useState<string>('');

  const fetchAllBreeds = async (): Promise<void> => {
    try {
      const respose = await fetch(DOGS_API_ENDPOINT_BREED_ALL);
      const { message, status } = await respose.json();

      if (status === 'error') {
        throw new Error(ERROR_DEFAULT_MESSAGE);
      }

      const data = flatReponse(message);
      setBreedList(data);
    } catch (error) {
      addToast({ message: error.message, variant: 'error' });
    }
  };

  React.useEffect((): void => {
    fetchAllBreeds();
  }, []);

  const handlePredictionData = (response: string): void =>
    setPrediction(response);

  return (
    <>
      <main>
        <h2>
          want to see a <span>Magic trick?</span>
        </h2>

        {!breedList.length ? (
          <>
            <Thumbnail src="ready" width="400px" alt="landing Illustration" />
            <p>
              <span>Please wait</span> , While we make our stage ready for you.
            </p>
          </>
        ) : (
          <>
            <Uploader
              breedList={breedList}
              handlePredictionData={handlePredictionData}
            />
            {hasPrediction && <Gallery breed={hasPrediction} />}
          </>
        )}
      </main>
    </>
  );
};

export default Main;
