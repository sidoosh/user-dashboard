import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

const routes = (app) => ([
  {
    path: '/',
    dynamicComp: dynamic({
      app,
      models: () => [
        import('./models/login'),
      ],
      component: () => import('./routes/login'),
    })
  },
  {
    path: '/error',
    dynamicComp: dynamic({
      app,
      component: () => import('./routes/error')
    })
  },
  {
    path: '/users',
    dynamicComp: dynamic({
      app,
      models: () => [
        import('./models/users'),
      ],
      component: () => import('./routes/users'),
    })
  }
])

function RouterConfig({ history, app }) {

  return (
    <Router history={history}>
      <Switch>
        {routes(app).map(({ path, dynamicComp: component }, index) => (
          <Route
            key={index}
            path={path}
            exact
            component={component}
          />
        ))}
        {/* <Redirect from='/' to='/login' /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
