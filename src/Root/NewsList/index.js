import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import Store from './Store';

import Item from './Item';

import styles from './styles.scss';


class NewsList extends PureComponent{

  constructor(props){
    super(props);

    this.store = new Store();
    this.attach(this.store);
  }

  componentDidMount = () => {
    this.store.load();
  };

  render(){
    const { news } = this.store;

    const hasNews = news !== null;

    return <div className={styles.root}>
      { hasNews && news.map(item => {
        return <Item
          key={item.id}
          data={item}
        />
      }) }
    </div>
  }
}


export default NewsList;