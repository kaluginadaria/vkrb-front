import React from 'react';

import Button from 'components/Button';

import wmsToDDMonthNameYYYY from 'utils/time/wmsToDDMonthNameYYYY';

import styles from './styles.scss';
import cn from "classnames";
import StarIcon from "../../../../components/icons/StarIcon";


const Item = React.memo((props) => {
  const {
    data,
    onToggleFav,
  } = props;

  return <div className={ styles.root }>
    <img
        className={styles.cover}
        src={data.photoUrl}
        alt={data.title}
    />
    <div className={styles.header}>
      <h2 className={styles.title}>{ data.title } ({data.acronym})</h2>
      <div
          className={cn(
              styles.star,
              data.isFav ? styles.active : styles.inactive,
          )}
          onClick={onToggleFav}
      >
      </div>
    </div>
    <p className={styles.text}>
      { data.description }
    </p>
    <div className={styles.controls}>

      <Button className={styles.control}>
        Сайт
      </Button>
    </div>
  </div>;
});


Item.propTypes = {};

Item.defaultProps = {};


export default Item;