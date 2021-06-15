export interface AnimalResponseType {
  code?: number;
  message: string | string[];
  status: string;
}

export interface ModelResponseType {
  className: string;
  probability: number;
}

export interface ErrorType {
  msge: string;
  status: boolean;
}

export interface toastType {
  message: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export interface toastMessagesType {
  toasts: toastType[];
}

export interface toastProviderType extends toastMessagesType {
  addToast: (toast: toastType) => void;
}

export interface fileType {
  size: number;
  type: string;
}

export interface RoutesType {
  component: React.FC;
  path: string;
  protectedRoute: boolean;
}
