import * as React from 'react';
import Thumbnail from '_components/thumbnail';
import Input from '_components/input';
import Preview from '_components/preview';
import useToasts from '_hooks/use-toasts';
import { ERROR_NO_PREDICTION, ERROR_NOT_VALID_IMAGE } from '_utils/constants';
import { imageValidation, dissectResponse } from '_utils/utils';
import { UploadContainer, Subtitle } from './uploader.style';
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
    } catch (err) {
      addToast({ message: err.message, variant: 'error' });
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
