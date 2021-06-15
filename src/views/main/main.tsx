import * as React from 'react';
import Uploader from '_views/uploader';
import Gallery from '_views/gallery';
import Thumbnail from '_components/thumbnail';
import {
  DOGS_API_ENDPOINT_BREED_ALL,
  ERROR_DEFAULT_MESSAGE,
} from '_utils/constants';
import { flatReponse } from '_utils/utils';
import useToasts from '_hooks/use-toasts';

const Main: React.FC = () => {
  const { addToast } = useToasts();
  const [breedList, setBreedList] = React.useState<string[]>([]);
  const [hasPrediction, setPrediction] = React.useState<string>('');

  const fetchAllBreeds = async () => {
    try {
      const respose = await fetch(DOGS_API_ENDPOINT_BREED_ALL);
      const { message, status } = await respose.json();

      if (status === 'error') {
        throw new Error(ERROR_DEFAULT_MESSAGE);
      }

      const data = flatReponse(message);
      setBreedList(data);
    } catch (err) {
      addToast({ message: err.message, variant: 'error' });
    }
  };

  React.useEffect(() => {
    fetchAllBreeds();
  }, []);

  const handlePredictionData = (response: string) => setPrediction(response);

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
