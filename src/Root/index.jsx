import React from 'react';
import { PureComponent } from '@ktx/react-relax';
import { Router, Switch, Redirect, Route } from 'react-router-dom';

import history from 'utils/history';

import oAuthStore from 'store/oAuthStore';

import TopBar from './TopBar';

import NewsList from './NewsList';
import Structure from './Structure';

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
        <TopBar/>
        <div className={styles.container}>
          { isAuthorized === true && <Switch>
            <Route path={'/news'} component={NewsList}/>
            <Route path={'/structure'} component={Structure}/>
            <Redirect to={'/news'}/>
          </Switch> }
          { isAuthorized === false && <>
            <button onClick={this.store.auth}>Auth</button> }
          </> }
        </div>
      </>
    </Router>
  }
}


export default <Root/>;