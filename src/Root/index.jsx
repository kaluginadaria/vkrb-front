import React from 'react';
import { PureComponent } from '@ktx/react-relax';
import { Router, Switch, Redirect, Route } from 'react-router-dom';

import history from 'utils/history';

import oAuthStore from 'store/oAuthStore';

import NewsList from './NewsList';

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
      { isAuthorized === true && <Switch>
        <Route path={'/news'} component={NewsList}/>
        <Redirect to={'/news'}/>
      </Switch> }
      { isAuthorized === false && <>
        <button onClick={this.store.auth}>Auth</button> }
      </> }
      {/*{ isAuthorized === true && 'IsAuth' }*/}
      {/*{ isAuthorized === false && 'Un auth' }*/}
      {/*<br/>*/}
      {/*<br/>*/}
      {/*{ isAuthorized === false && <button onClick={this.store.auth}>Auth</button> }*/}
      {/*{ isAuthorized === true && <button onClick={this.store.unAuth}>Un Auth</button> }*/}
    </Router>;
  }
}


export default <Root/>;