import React from 'react';
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

  onToggleFav = (id) => () => {
    this.store.toggleFav(id);
  };

  render() {

    const data = this.store.data;
    const items = this.store.items;

    if (data === null){
      return null
    }
    if (items ===null){
      return null
    }

    return <div className={ styles.root }>
      <h1 className={styles.title}>{data.title} ({data.acronym})</h1>
      <div>{data.description}</div>

      <div className={styles.container}>
        <span className={styles.bold}>Декан: </span>
        {data.ceo}
      </div>

      <div className={styles.container}>
        <span className={styles.bold}>Основные направления: </span>
        {data.activityCourse}
      </div>

      <div className={styles.container}>
        <span className={styles.bold}>История: </span>
        {data.history}
      </div>

      <h2 className={styles.title2}>Кафедры</h2>
      
      {  items.ids.map(id=> {
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


Page.propTypes = {};

Page.defaultProps = {};


export default Page;
