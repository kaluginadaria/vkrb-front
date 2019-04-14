import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import Store from './Store';


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

    return <div>
      { !hasNews && 'loading...' }
      { hasNews && news.map(item => {
        return <div
          key={item.id}
        >
          { item.title }
        </div>
      }) }
    </div>
  }
}


export default NewsList;