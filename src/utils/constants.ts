import { ErrorType } from './types';

// ENDPOINTS
export const DOGS_API_ENDPOINT_BASE: string = 'https://dog.ceo/api';
export const DOGS_API_ENDPOINT_BREED_ALL: string = `${DOGS_API_ENDPOINT_BASE}/breeds/list/all`;
export const DOGS_API_ENDPOINT_BREED_SINGLE: string = `${DOGS_API_ENDPOINT_BASE}/breed`;

// DEFAULT MESSAGES
export const ERROR_DEFAULT_MESSAGE: string = 'Something went wrong! Try again';
export const ERROR_NO_PREDICTION: string =
  "Oops! we can't find any predictions on uploaded Image";
export const ERROR_NO_COLLECTION: string =
  "Oops! we can't find any similar dog with this breed";
export const ERROR_DEFAULT_STATE: ErrorType = {
  msge: ERROR_DEFAULT_MESSAGE,
  status: false,
};

export const ERROR_IMAGE_SIZE: string = 'Oops! Incorrect file size';
export const ERROR_IMAGE_TYPE: string = 'Oops! Invalid file type';
