import * as React from 'react';

import { PreviewContainer } from './preview.style';

interface PreviewProps extends React.ComponentPropsWithoutRef<'img'> {
  isLoading: boolean;
  label: string;
  src: string;
  title: string;
}

const Preview: React.FC<PreviewProps & {
  ref: React.Ref<HTMLImageElement>;
}> = React.forwardRef<HTMLImageElement, PreviewProps>(
  ({ isLoading, title, src, label }: PreviewProps, reference): JSX.Element => {
    return (
      <>
        <PreviewContainer overlay={isLoading}>
          <img src={src} ref={reference} alt={label} />
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
