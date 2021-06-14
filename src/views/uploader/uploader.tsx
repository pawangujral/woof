import * as React from 'react';
import PlaceHolder from '_components/placeholder';
import useToasts from '_hooks/useToasts';
import { ERROR_NO_PREDICTION } from '_utils/constants';
import { imageValidation, dissectResponse } from '_utils/utils';
import {
  UploadContainer,
  ImageContainer,
  InputLabel,
  Subtitle,
} from './uploader.style';
import * as mobilenet from '@tensorflow-models/mobilenet';

interface UploaderProps {
  breedList: string[];
  handlePredictionData: (response: string) => void;
}

const Uploader: React.FC<UploaderProps> = ({
  breedList,
  handlePredictionData,
}: UploaderProps) => {
  const { addToast } = useToasts();
  const inputElement = React.useRef<HTMLInputElement>(null);
  const previewElement = React.useRef<HTMLImageElement>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [breedName, setBreedName] = React.useState<string | null>(null);

  const handleFetchModel = async () => {
    try {
      setLoading(true);
      const model = await mobilenet.load();
      const predictions = await model.classify(
        previewElement.current as HTMLImageElement,
      );

      console.log(predictions);

      if (!predictions.length) {
        throw new Error(ERROR_NO_PREDICTION);
      }

      const dissectData = dissectResponse(predictions[0].className);

      let finalPredictions: string = '';

      for (let a of dissectData) {
        if (breedList.includes(a)) {
          console.log('Match Found for ' + a);
          finalPredictions = a;
          break;
        }
      }

      if (!finalPredictions.length) {
        throw new Error("Doesn't look a dog image");
        return;
      }

      handlePredictionData(finalPredictions);
      setBreedName(finalPredictions);
    } catch (err) {
      addToast({ message: err.message, variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (preview) {
      handlePredictionData('');
      setBreedName('');
      handleFetchModel();
    }
  }, [preview]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    if (file && file.length) {
      const { isFileValid, data } = imageValidation(file[0]);
      if (!isFileValid) {
        addToast({ message: data, variant: 'error' });
        return;
      }
      setPreview(data);
    }
  };

  return (
    <UploadContainer>
      <h2>
        want to see a <span>Magic trick?</span>
      </h2>
      {!preview && (
        <Subtitle>
          Upload your dog photo <span>&amp;</span> we will tell you which breed
          it is.{' '}
        </Subtitle>
      )}

      {preview ? (
        <>
          <ImageContainer overlay={isLoading}>
            <img src={preview} ref={previewElement} alt="Image Preview" />
            {!isLoading && breedName && (
              <figcaption>
                Your dog breed is <span>{breedName}</span>
              </figcaption>
            )}
            {!isLoading && !breedName && (
              <figcaption>
                Did you really upload your <span>dog</span> image?
              </figcaption>
            )}
          </ImageContainer>
          <p>Want to try again ?</p>
        </>
      ) : (
        <PlaceHolder src="landing" width="400px" alt="landing Illustration" />
      )}

      <InputLabel>
        Upload image
        <input
          type="file"
          ref={inputElement}
          onChange={handleImageUpload}
          accept="image/*"
        />
      </InputLabel>
    </UploadContainer>
  );
};

export default Uploader;
