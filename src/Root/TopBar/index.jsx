import React from 'react';

import { NavLink } from 'react-router-dom';

import User from './User';
import Menu from './Menu';

import styles from './styles.scss';


const TopBar = React.memo((props) => {
  const {} = props;

  return <div className={ styles.root }>
    <NavLink
      className={styles.item}
      activeClassName={styles.active}
      to={'/news'}
    >
      Новости
    </NavLink>
    <NavLink
      className={styles.item}
      activeClassName={styles.active}
      to={'/stat'}
    >
      Статистика
    </NavLink>
    <NavLink
      className={styles.item}
      activeClassName={styles.active}
      to={'/structure'}
    >
      Структура
    </NavLink>
    <NavLink
      className={styles.item}
      activeClassName={styles.active}
      to={'/discussions'}
    >
      Обсуждения
    </NavLink>
    <div className={styles.item}>
      Обучение
      <Menu className={styles.sublink}/>
    </div>
    <User/>
  </div>;
});


TopBar.propTypes = {};

TopBar.defaultProps = {};


export default TopBar;
