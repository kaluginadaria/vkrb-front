import React from 'react';
import cn from 'classnames';

import { Link as LinkCommon } from 'react-router-dom';

import styles from './styles.scss';


const Link = React.memo((props) => {
  const {
    to,
    children,
    className
  } = props;

  return <LinkCommon
    className={ cn(styles.root, className) }
    to={to}
  >
    { children }
  </LinkCommon>;
});


Link.propTypes = {};

Link.defaultProps = {};


export default Link;
