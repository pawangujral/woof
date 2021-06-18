import Input from '_/components/input';
import Preview from '_/components/preview';
import Thumbnail from '_/components/thumbnail';
import useToasts from '_/hooks/use-toasts';
import { ERROR_NO_PREDICTION, ERROR_NOT_VALID_IMAGE } from '_/utils/constants';
import { dissectResponse, imageValidation } from '_/utils/utils';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as React from 'react';

import { Subtitle, UploadContainer } from './uploader.style';

interface UploaderProps {
  breedList: string[];
  handlePredictionData: (response: string) => void;
}

const Uploader: React.FC<UploaderProps> = ({
  breedList,
  handlePredictionData,
}: UploaderProps): JSX.Element => {
  const { addToast } = useToasts();
  const inputElement = React.useRef<HTMLInputElement>(null);
  const previewElement = React.useRef<HTMLImageElement>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [breedName, setBreedName] = React.useState<string>('');

  const handleFetchModel = async () => {
    try {
      setLoading(true);
      const model = await mobilenet.load();
      const predictions = await model.classify(
        previewElement.current as HTMLImageElement,
      );

      if (!predictions.length) {
        throw new Error(ERROR_NO_PREDICTION);
      }

      handleDataSet(predictions[0].className);
    } catch (error) {
      addToast({ message: error.message, variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDataSet = (className: string) => {
    const result = dissectResponse(className, breedList);

    if (!result.length) {
      addToast({ message: ERROR_NOT_VALID_IMAGE, variant: 'error' });

      return;
    }

    handlePredictionData(result);
    setBreedName(result);
  };

  React.useEffect((): void => {
    if (preview) {
      handlePredictionData('');
      setBreedName('');
      handleFetchModel();
    }
  }, [preview]);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = event.target.files;

    if (file?.length) {
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
      {preview ? (
        <Preview
          isLoading={isLoading}
          src={preview}
          ref={previewElement}
          label="Uploaded Image Preview"
          title={breedName}
        />
      ) : (
        <>
          <Subtitle>
            Upload your dog photo <span>&amp;</span> we will tell you which
            breed it is.
          </Subtitle>
          <Thumbnail src="landing" width="400px" alt="landing Illustration" />
        </>
      )}

      <Input
        label="Upload image"
        handleChange={handleImageUpload}
        ref={inputElement}
        disabled={isLoading}
      />
    </UploadContainer>
  );
};

export default Uploader;
