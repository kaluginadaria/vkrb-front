import React from 'react';
import cn from 'classnames';

import Link from 'components/Link';

import ListArticlesGet from 'api/connections/ListArticlesGet';

import styles from './styles.scss';
import Button from "../../components/Button";


class Articles extends React.PureComponent {

  constructor(props) {
    super(props);

    this._apiListArticlesGet = new ListArticlesGet();

    this.state = {
      articles: null,
    };
  }

  componentDidMount = async () => {
    const [response] = await this._apiListArticlesGet.call({
      limit: 100,
    });

    if(response){
      this.setState({
        articles: response,
      });
    }
  };

  render() {
    const { articles } = this.state;

    if(articles === null){
      return null;
    }

    return <div className={ styles.root }>
      <h1 className={styles.title}>Научные статьи</h1>

      { articles.list.map(data => {
        return <div
          key={data.id}
          className={styles.article}
        >
          <img className={styles.cover} src={data.photo.url} alt=""/>
          <h2 className={styles.name}>{ data.title }</h2>
          <div className={styles.info}>
          <span className={styles.infoItem}>
            Автор: { data.author }
          </span>
            <span className={styles.infoItem}>
            Год издания: { data.date_of_issued }
          </span>
          </div>

          <p className={styles.text}>
            { data.body }
          </p>

          <a href={data.attachment.url} target="_blank" className={styles.link}>
            <Button className={styles.control}>
              Читать
            </Button>
          </a>
        </div>
      }) }
    </div>;
  }
}


Articles.propTypes = {};

Articles.defaultProps = {};


export default Articles;
