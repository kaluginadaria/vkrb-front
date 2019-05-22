import React from 'react';


const Icon = React.memo((props) => {
  const {
    className,
  } = props;

  return <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792">
    <path fill="currentColor" d="M1605.42373 1169.6102q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109q10.5-58.5 26.5-108.5t43-97.5q27-47.5 62-81t85.5-53.5q50.5-20 111.5-20 9 0 42 21.5t74.5 48q41.5 26.5 108 48t133.5 21.5q67 0 133.5-21.5t108-48q41.5-26.5 74.5-48t42-21.5q61 0 111.5 20t85.5 53.5q35 33.5 62 81t43 97.5q16 50 26.5 108.5t14 109q3.5 50.5 3.5 103.5zm-320-893q0 159-112.5 271.5t-271.5 112.5q-159 0-271.5-112.5t-112.5-271.5q0-159 112.5-271.5t271.5-112.5q159 0 271.5 112.5t112.5 271.5z"/>
  </svg>

});


Icon.propTypes = {};

Icon.defaultProps = {};


export default Icon;
