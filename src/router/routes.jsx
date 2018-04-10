import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { StateType, getLinkDef, getNavLink } from './definition';
import { LoginPage } from '../apis/loginpage';
import Main from '../views/main';
import Home from '../views/home';
import WizardPage from '../views/wizardpage';
import FileChooseView from '../views/filechoose';
import ParsingView from '../views/parsingview';


const Routes = (
  <Switch>
    <Redirect exact from="/" to={getLinkDef(StateType.LOGIN)} /> 
    <Route exact path={getLinkDef(StateType.LOGIN)} component={LoginPage} />
    <Main>
      <Switch>
        <Route exact path={getLinkDef(StateType.HOME)} component={Home} />
        <Route exact path={getLinkDef(StateType.WIZARDPAGE)} component={WizardPage} />
        <Route exact path={getLinkDef(StateType.FILECHOOSE)} component={FileChooseView} />
        <Route exact path={getLinkDef(StateType.PARSING)} component={ParsingView} />
      </Switch>
    </Main>
  </Switch>
);


export default Routes;
