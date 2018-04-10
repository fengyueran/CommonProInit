import React from 'react';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHashHistory from 'history/createHashHistory';
import Routes from './routes';
import { setHistory } from './navigation';
import configureStore from '../app/store/configureStore';
// TODO: history save/load. can do this by enhance history.

const hashHistory = createHashHistory();

setHistory(hashHistory);
const historyMiddleware = routerMiddleware(hashHistory);
const AppRouter = () => (
  <ConnectedRouter history={hashHistory}>
    {Routes}
  </ConnectedRouter>
);

export { AppRouter, historyMiddleware };

