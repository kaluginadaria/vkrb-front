import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';
import stylesDefault from './stylesDefault.scss';


const TextInput = React.memo((props) => {
  const {
    onChange,
    value,
    className,
    placeholder,
    type,
  } = props;

  return <input
    className={cn(styles.root, className)}
    onChange={onChange}
    value={value}
    type={type}
    placeholder={placeholder}
  />
});


TextInput.propTypes = {};

TextInput.defaultProps = {
  className: stylesDefault.root,
  type: 'text',
};


export default TextInput;
