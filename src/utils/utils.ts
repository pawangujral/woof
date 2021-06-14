import { ERROR_IMAGE_SIZE, ERROR_IMAGE_TYPE } from './constants';
import { fileType } from './types';

type ImageValidationReturn = {
  data: string;
  isFileValid: boolean;
};

export const imageValidation = (file: fileType): ImageValidationReturn => {
  const MAX_FILE_SIZE: Number = 2000000;
  const MIN_FILE_SIZE: Number = 0;
  const FILE_TYPE_ARR: string[] = ['image/jpeg', 'image/png', 'image/jpg'];
  const { size, type } = file;

  if (size <= MIN_FILE_SIZE || size >= MAX_FILE_SIZE) {
    return { data: ERROR_IMAGE_SIZE, isFileValid: false };
  }

  if (!FILE_TYPE_ARR.includes(type)) {
    return { data: ERROR_IMAGE_TYPE, isFileValid: false };
  }

  return { isFileValid: true, data: URL.createObjectURL(file) };
};

export const flatReponse = (message: any): string[] => Object.keys(message);

export const dissectResponse = (name: string): string[] =>
  name
    .split(',')
    .join('')
    .trim()
    .split(' ');
