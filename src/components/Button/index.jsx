import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';
import stylesDefault from './stylesDefault.scss';


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

Button.defaultProps = {
  className: stylesDefault.root,
};


export default Button;
