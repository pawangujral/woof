import { ToastProvider } from '_hooks/use-toasts';
import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <ToastProvider>{children}</ToastProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
