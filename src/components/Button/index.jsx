import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';


const Button = React.memo((props) => {
  const {
    children,
    onClick,
    className,
  } = props;

  return <button
    className={ cn(styles.root, className) }
    onClick={onClick}
  >
    { children }
  </button>;
});


Button.propTypes = {};

Button.defaultProps = {};


export default Button;
