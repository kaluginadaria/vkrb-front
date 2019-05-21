import React from 'react';

import Button from 'components/Button';
import StarIcon from 'components/icons/StarIcon';
import cn from "classnames";

import styles from './styles.scss';


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
        <StarIcon className={styles.starIcon}/>
      </div>
    </div>
    <p className={styles.text}>
      { data.description }
    </p>

    <a href={data.link} target="_blank">
      <Button className={styles.control}>
        Сайт
      </Button>
    </a>
  </div>;
});


Item.propTypes = {};

Item.defaultProps = {};


export default Item;
