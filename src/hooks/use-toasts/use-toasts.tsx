import * as React from 'react';
import { toastType, toastMessagesType, toastProviderType } from '_utils/types';
import { ToastContainer, ToastMessage } from './useToasts.style';

interface providerProps {
  children: React.ReactNode;
}

const TOAST_DEFAULT_DATA: toastMessagesType = {
  toasts: [],
};

const Ctx = React.createContext(TOAST_DEFAULT_DATA);

export const ToastProvider: React.FC<providerProps> = ({
  children,
}: providerProps) => {
  const [state, setState] = React.useState<toastMessagesType>(
    TOAST_DEFAULT_DATA,
  );

  React.useEffect(() => {
    const toastTimeOut = setTimeout(() => {
      setState({ toasts: [] });
    }, 5000);

    return () => clearTimeout(toastTimeOut);
  }, [state.toasts]);

  const addToast = (toast: toastType) =>
    setState({ toasts: [...state.toasts, toast] });

  const methods = {
    addToast,
  };

  return (
    <Ctx.Provider value={{ ...state, ...methods }}>
      {children}
      <ToastContainer>
        {state.toasts.map((item, index) => {
          return (
            <ToastMessage key={index} variant={item.variant}>
              {item.message}
            </ToastMessage>
          );
        })}
      </ToastContainer>
    </Ctx.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(Ctx) as toastProviderType;
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default useNotification;
