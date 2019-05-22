import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';
import stylesDefault from './stylesDefault.scss';


const TextInput = React.memo((props) => {
  const {
    onChange,
    value,
    className,
  } = props;

  return <input
    className={cn(styles.root, className)}
    onChange={onChange}
    value={value}
    type='text'
  />
});


TextInput.propTypes = {};

TextInput.defaultProps = {
  className: stylesDefault.root,
};


export default TextInput;
