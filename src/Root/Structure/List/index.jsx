import propTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { PureComponent } from '@ktx/react-relax';

import Item from './Item';

import Store from './Store';

import styles from './styles.scss';


class List extends PureComponent {

  constructor(props) {
    super(props);

    this.store = new Store();
    this.attach(this.store);
  }

  componentDidMount = () => {
    this.store.load();
  };

  onToggleFav = (id) => () => {
    this.store.toggleFav(id);
  };

  render() {
    const { items } = this.store;

    if(items === null){
      return null;
    }

    return <div className={ styles.root }>
      <h1 className={styles.title}>Факультеты</h1>
      { items.ids.map(id => {
        const entity = items.entities[id];
        return <Item
          key={id}
          data={entity}
          onToggleFav={this.onToggleFav(id)}
        />
      }) }
    </div>;
  }
}


List.propTypes = {};

List.defaultProps = {};


export default List;
