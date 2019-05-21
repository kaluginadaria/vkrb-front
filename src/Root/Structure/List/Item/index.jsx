import React from 'react';
import cn from 'classnames';

import StarIcon from 'components/icons/StarIcon';
import Button from 'components/Button';
import styles from './styles.scss';
import history from 'utils/history';

const goToPage = (giId) => () => {
  history.push(`/structure/page/${giId}`)
};

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
    <div className={styles.controls}>
      <Button className={styles.control}
      onClick={goToPage(data.id)}>

        Просмотр
      </Button>
      <a target="_blank" href={data.link}>
        <Button className={styles.control}>
          Сайт
        </Button>
      </a>

    </div>
  </div>;
});


Item.propTypes = {};

Item.defaultProps = {};


export default Item;
