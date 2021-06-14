export type AnimalResponseType = {
  code?: number;
  message: string | string[];
  status: string;
};

export interface ModelResponseType {
  className: string;
  probability: number;
}

export type ErrorType = {
  msge: string;
  status: boolean;
};

export type toastType = {
  message: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
};

export type toastMessagesType = {
  toasts: toastType[];
};

export interface toastProviderType extends toastMessagesType {
  addToast: (toast: toastType) => void;
}

export type fileType = {
  size: number;
  type: string;
};

export type RoutesType = {
  component: React.FC;
  path: string;
  protectedRoute: boolean;
};
