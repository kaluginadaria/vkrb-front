import React from 'react';

import Button from 'components/Button';

import wmsToDDMonthNameYYYY from 'utils/time/wmsToDDMonthNameYYYY';

import styles from './styles.scss';


class Item extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: true,
    }
  }

  toggleCollapsed = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isCollapsed: !prevState.isCollapsed,
      }
    });
  };

  render() {
    const { data } = this.props;
    const { isCollapsed } = this.state;

    return <div className={ styles.root }>
      <h2 className={styles.title}>{ data.title }</h2>
      {/*<div className={styles.keywords}>*/}
      {/*  { data.keyWords.map((text, index) => {*/}
      {/*    return <span*/}
      {/*      key={index}*/}
      {/*      className={styles.keyword}*/}
      {/*    >*/}
      {/*      #{ text }*/}
      {/*    </span>*/}
      {/*  }) }*/}
      {/*</div>*/}
      {/*<span className={styles.creationDate}>*/}
      {/*  { wmsToDDMonthNameYYYY(data.creationDateWMS) }*/}
      {/*</span>*/}
      {/*<img*/}
      {/*  className={styles.cover}*/}
      {/*  src={data.mainPhoto}*/}
      {/*  alt={data.title}*/}
      {/*/>*/}
      {/*<p className={styles.text}>*/}
      {/*  { isCollapsed ? data.text.substr(0, 300).trim() + '...' : data.text }*/}
      {/*</p>*/}
      {/*<Button*/}
      {/*  className={styles.button}*/}
      {/*  onClick={this.toggleCollapsed}*/}
      {/*>*/}
      {/*  { isCollapsed ? 'Посмотреть' : 'Свернуть' }*/}
      {/*</Button>*/}
    </div>;
  }
}


Item.propTypes = {};

Item.defaultProps = {};


export default Item;
