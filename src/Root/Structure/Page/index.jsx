import propTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { PureComponent } from '@ktx/react-relax';


import styles from './styles.scss';
import Store from "./Store";
import Item from "./Item";


class Page extends PureComponent {

  constructor(props) {
    super(props);
    this.store = new Store();
    this.attach(this.store);
  }

  componentDidMount = () => {
    const {id} = this.props.match.params;
    this.store.load(id);
    this.store.loadSi(id);
  };

  render() {

    const item = this.store.data;
    const items = this.store.items;

    if (item === null){
      return null
    }
    if (items ===null){
      return null
    }


    console.warn(items);

    return <div className={ styles.root }>
        <h1 className={styles.title}>{item.title} ({item.acronym})</h1>
      <div>{item.description}</div>

      <div className={styles.container}>
        <span className={styles.bold}>Декан: </span>
        {item.ceo}
      </div>

      <div className={styles.container}>
        <span className={styles.bold}>Основные направления: </span>
        {item.activityCourse}
      </div>

      <div className={styles.container}>
        <span className={styles.bold}>История: </span>
        {item.history}
      </div>
      <div className={styles.root}>
        {  items.ids.map(id=> {
          const entity = items.entities[id];
          return <Item
              key={id}
              data={entity}
          />
        }) }
      </div>


    </div>;
  }
}


Page.propTypes = {};

Page.defaultProps = {};


export default Page;
