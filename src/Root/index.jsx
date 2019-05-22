import React from 'react';
import { PureComponent } from '@ktx/react-relax';
import { Router, Switch, Redirect, Route } from 'react-router-dom';

import history from 'utils/history';

import oAuthStore from 'store/oAuthStore';

import TopBar from './TopBar';

import NewsList from './NewsList';
import Structure from './Structure';

import AuthForm from './AuthForm';
import RegForm from './RegForm';

import styles from './styles.scss';


class Root extends PureComponent {
  constructor(props){
    super(props);

    this.store = oAuthStore;
    this.attach(this.store);
  }

  componentDidMount = () => {
    this.store.checkIsAuth();
  };

  render(){
    const { isAuthorized } = this.store;

    return <Router history={history}>
      <>
        { isAuthorized === true && <>
          <TopBar/>
          <div className={styles.container}>
            <Switch>
              <Route path={'/news'} component={NewsList}/>
              <Route path={'/structure'} component={Structure}/>
              <Redirect to={'/news'}/>
            </Switch>
          </div>
        </> }
        { isAuthorized === false && <Switch>
          <Route path={'/auth'} component={AuthForm}/>
          <Route path={'/reg'} component={RegForm}/>
          <Redirect to={'/auth'}/>
        </Switch> }
      </>
    </Router>
  }
}


export default <Root/>;