import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';


const Button = React.memo((props) => {
  const {
    children,
    onClick,
  } = props;

  return <button
    className={ styles.root }
    onClick={onClick}
  >
    { children }
  </button>;
});


Button.propTypes = {};

Button.defaultProps = {};


export default Button;
