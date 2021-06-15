import { ERROR_IMAGE_SIZE, ERROR_IMAGE_TYPE } from './constants';
import { fileType } from './types';

interface ImageValidationReturn {
  data: string;
  isFileValid: boolean;
}

export const imageValidation = (file: fileType): ImageValidationReturn => {
  const MAX_FILE_SIZE: number = 2000000;
  const MIN_FILE_SIZE: number = 0;
  const FILE_TYPE_ARR: string[] = ['image/jpeg', 'image/png', 'image/jpg'];
  const { size, type } = file;

  if (size <= MIN_FILE_SIZE || size >= MAX_FILE_SIZE) {
    return { data: ERROR_IMAGE_SIZE, isFileValid: false };
  }

  if (!FILE_TYPE_ARR.includes(type)) {
    return { data: ERROR_IMAGE_TYPE, isFileValid: false };
  }

  return { data: URL.createObjectURL(file), isFileValid: true };
};

export const flatReponse = (message: { [key: string]: string[] }): string[] => {
  return Object.keys(message);
};

export const dissectResponse = (name: string, list: string[]): string => {
  const dissectData = name
    .split(',')
    .join('')
    .trim()
    .split(' ');

  for (const data of dissectData) {
    if (list.includes(data)) {
      return data;
    }
  }

  return '';
};
