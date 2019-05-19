import React from 'react';

import Button from 'components/Button';

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
      <div className={styles.header}>
        <h2 className={styles.title}>{ data.title }</h2>
        <span className={styles.creationDate}>12.08.2018</span>
      </div>
      <img className={styles.cover} src="" alt=""/>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad assumenda esse libero molestias nemo reiciendis sequi veritatis, vitae voluptate? Animi autem dolorum incidunt odit provident quasi quod rem saepe.
      </p>
      <Button
        className={styles.button}
        onClick={this.toggleCollapsed}
      >
        { isCollapsed ? 'Посмотреть' : 'Свернуть' }
      </Button>
    </div>;
  }
}


Item.propTypes = {};

Item.defaultProps = {};


export default Item;
