import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Routes, { RoutesNames } from './routes';
import Error from './Error';

const Root = React.lazy(() => import('./Root'));
const Login = React.lazy(() => import('./Login'));
const Register = React.lazy(() => import('./Register'));
const FullMap = React.lazy(() => import('./FullMap'));
const SingleMap = React.lazy(() => import('./SingleMap'));
const ElectricDistribution = React.lazy(() => import('./ElectricDistribution'));


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div />}>
        <Switch>
          <Route exact path={Routes.ROOT} name={RoutesNames.ROOT} component={Root} />
          <Route exact path={Routes.LOGIN} name={RoutesNames.LOGIN} component={Login} />
          <Route exact path={Routes.REGISTER} name={RoutesNames.REGISTER} component={Register} />
          <Route exact path={Routes.FULLMAP} name={RoutesNames.FULLMAP} component={FullMap} />
          <Route exact path={Routes.SINGLEMAP} name={RoutesNames.SINGLEMAP} component={SingleMap} />
          <Route exact path={Routes.ELECTRODISTRIBUTION} name={RoutesNames.ELECTRODISTRIBUTION} component={ElectricDistribution} />
          <Route component={Error} />
          <Redirect to={Routes.ERROR} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
