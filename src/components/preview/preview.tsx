import * as React from 'react';
import { PreviewContainer } from './preview.style';

interface PreviewProps extends React.ComponentPropsWithoutRef<'img'> {
  isLoading: boolean;
  title: string;
  src: string;
  label: string;
}

const Preview: React.FC<PreviewProps & {
  ref: React.Ref<HTMLImageElement>;
}> = React.forwardRef<HTMLImageElement, PreviewProps>(
  ({ isLoading, title, src, label }: PreviewProps, ref) => {
    return (
      <>
        <PreviewContainer overlay={isLoading}>
          <img src={src} ref={ref} alt={label} />
          <figcaption>
            {!isLoading && title && (
              <>
                Your dog breed is <span>{title}</span>
              </>
            )}
            {!isLoading && !title && (
              <>
                Did you really upload your <span>dog</span> image?
              </>
            )}
          </figcaption>
        </PreviewContainer>
        <p>want to try again ?</p>
      </>
    );
  },
);

export default Preview;
