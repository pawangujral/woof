import { ToastProvider } from '_/hooks/use-toasts';
import GlobalStyle from '_/theme/global-styles';
import Header from '_/views/common/header';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Routes } from './routes';

const App: React.FC = (): JSX.Element => {
  return (
    <Router basename="/">
      <ToastProvider>
        <GlobalStyle />
        <Header />
        <Switch>
          {Routes.map(({ path, component }, key) => (
            <Route exact path={path} key={key} component={component} />
          ))}
        </Switch>
      </ToastProvider>
    </Router>
  );
};

export default App;
