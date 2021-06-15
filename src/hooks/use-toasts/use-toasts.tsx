import { toastMessagesType, toastType } from '_utils/types';
import * as React from 'react';

import { ToastContainer, ToastMessage } from './use-toasts.style';

interface providerProps {
  children: React.ReactNode;
}

const TOAST_DEFAULT_DATA: toastMessagesType = {
  toasts: [],
};

const Context = React.createContext(TOAST_DEFAULT_DATA);

const MAX_TIMEOUT_TOASTS: number = 5000;

export const ToastProvider: React.FC<providerProps> = ({
  children,
}: providerProps): JSX.Element => {
  const [state, setState] = React.useState<toastMessagesType>(
    TOAST_DEFAULT_DATA,
  );

  React.useEffect((): void => {
    const toastTimeOut = setTimeout((): void => {
      setState({ toasts: [] });
    }, MAX_TIMEOUT_TOASTS);

    return () => clearTimeout(toastTimeOut);
  }, [state.toasts]);

  const addToast = (toast: toastType): void =>
    setState({ toasts: [...state.toasts, toast] });

  const methods = {
    addToast,
  };

  return (
    <Context.Provider value={{ ...state, ...methods }}>
      {children}
      <ToastContainer>
        {React.Children.toArray(
          state.toasts.map(
            (item): JSX.Element => {
              return (
                <ToastMessage variant={item.variant}>
                  {item.message}
                </ToastMessage>
              );
            },
          ),
        )}
      </ToastContainer>
    </Context.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export default useNotification;
