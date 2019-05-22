import propTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { PureComponent } from '@ktx/react-relax';

import oAuthStore from 'store/oAuthStore';

import Icon from './Icon';

import styles from './styles.scss';


class User extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(oAuthStore);
    this.store = oAuthStore;
  }

  render() {
    const { data } = oAuthStore;

    if(data === null){
      return null;
    }

    return <div className={ styles.root }>
      <Icon className={styles.icon}/>
      { data.name }

      <div className={styles.menu}>
        <div
          className={styles.item}
          onClick={oAuthStore.unAuth}
        >
          Выйти
        </div>
      </div>
    </div>;
  }
}


User.propTypes = {};

User.defaultProps = {};


export default User;
