import propTypes from 'prop-types';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PureComponent } from '@ktx/react-relax';

import List from './List';


class Structure extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return <Switch>
      <Route path={'/structure/list'} component={List}/>
      {/*<Route path={'/structure/page/:id'} component={}/>*/}
      <Redirect to={'/structure/list'}/>
    </Switch>
  }
}


Structure.propTypes = {};

Structure.defaultProps = {};


export default Structure;
