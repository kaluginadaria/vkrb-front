import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import styles from './styles.scss';


const Menu = React.memo((props) => {
  const {
    className,
  } = props;

  return <div className={ cn(styles.root, className) }>
    <Link to={'/articles'} className={styles.item}>Научные статьи</Link>
    <Link to={'/lit'} className={styles.item}>Рекомендованная литература</Link>
  </div>;
});


Menu.propTypes = {};

Menu.defaultProps = {};


export default Menu;
