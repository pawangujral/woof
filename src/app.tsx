import * as React from 'react';
import Header from '_views/common/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from './routes';
import { ToastProvider } from '_hooks/use-toasts';
import GlobalStyle from '_theme/global-styles';

function App() {
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
}

export default App;
