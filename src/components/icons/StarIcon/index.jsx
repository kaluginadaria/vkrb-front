import React from 'react';


const StarIcon = React.memo((props) => {
  const {
    className,
  } = props;

  return <svg
    className={className}
    width="336px" height="319px" viewBox="0 0 336 319" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <polygon fill="currentColor" points="168 264 64.5497956 318.386991 84.3070266 203.193496 0.614053132 121.613009 116.274898 104.806504 168 0 219.725102 104.806504 335.385947 121.613009 251.692973 203.193496 271.450204 318.386991"/>
    </g>
  </svg>
});


StarIcon.propTypes = {};

StarIcon.defaultProps = {};


export default StarIcon;
