import React from 'react';
import cn from 'classnames';

import DiscussionsGet from 'api/connections/DiscussionsGet';
import DiscussionCreate from 'api/connections/DiscussionCreate';

import Button from 'components/Button';
import TextInput from 'components/TextInput';

import wmsToDDMonthNameYYYY from 'utils/time/wmsToDDMonthNameYYYY';

import styles from './styles.scss';


class Discussions extends React.PureComponent {

  constructor(props) {
    super(props);

    this._apiDiscussionsGet = new DiscussionsGet();
    this._apiDiscussionCreate = new DiscussionCreate();

    this.state = {
      discussions: null,
      newSubject: '',
      newQuestion: '',
      selectedDiscussion: null,
      comment: '',
    };
  }

  componentDidMount = () => {
    this.loadDiscussions();
  };

  loadDiscussions = async () => {
    const [response] = await this._apiDiscussionsGet.call({
      limit: 100,
    });

    if(response){
      this.setState({
        discussions: response,
      })
    }
  };

  setSubject = (e) => {
    this.setState({
      newSubject: e.target.value,
    })
  };

  setQuestion = (e) => {
    this.setState({
      newQuestion: e.target.value,
    })
  };

  createSubject = async () => {
    const { newSubject, newQuestion } = this.state;

    const [ response ] = await this._apiDiscussionCreate.call({
      subject: newSubject,
      question: newQuestion,
    });

    if(response) {
      this.setState({
        newSubject: '',
        newQuestion: '',
      });

      this.loadDiscussions();
    }
  };

  selectDiscussion = (id) => () => {
    this.setState({
      selectedDiscussion: id,
    })
  };

  unSelectDiscussion = () => {
    this.setState({
      selectedDiscussion: null,
    })
  };

  setComment = (e) => {
    this.setState({
      comment: e.target.value,
    })
  };

  comment = async () => {
    const { comment, selectedDiscussion } = this.state;

    const [ response ] = await this._apiDiscussionCreate.call({
      parent: selectedDiscussion,
      question: comment,
      subject: 'zaaaaaaya',
    });

    if(response){
      this.setState({
        comment: '',
      });

      this.loadDiscussions();
    }
  };

  render() {
    const {
      discussions,
      newSubject,
      newQuestion,
      selectedDiscussion,
      comment,
    } = this.state;

    if(discussions === null){
      return null;
    }

    const hasSelected = selectedDiscussion !== null;

    let discussion = null;

    if(hasSelected){
      discussion = discussions.list.find(discussion => discussion.id === selectedDiscussion);
    }

    return <div className={ styles.root }>

      { !hasSelected && <div className={styles.dis}>
        <h5 className={styles.title}>Создать обсуждение</h5>
        <TextInput
          placeholder={'Введите тему'}
          value={newSubject}
          onChange={this.setSubject}
        />
        <textarea
          placeholder={'Введите вопрос'}
          value={newQuestion}
          onChange={this.setQuestion}
          className={styles.textArea}
        />
        <Button onClick={this.createSubject}>
          Создать
        </Button>
      </div> }

      { discussions.list.map(data => {

        if(hasSelected){
          if(data.id !== selectedDiscussion){
            return;
          }
        }

        return <div
          className={styles.dis}
          key={data.id}
        >
          <h5 className={styles.title}>{ data.subject }</h5>
          <p className={styles.text}>{ data.question }</p>
          <div className={styles.info}>
            <span className={styles.infoItem}>Автор: { data.user.first_name }</span>
            <span className={styles.infoItem}>Создано: {wmsToDDMonthNameYYYY(Number(data.created) * 1000)}</span>
            <Button
              className={styles.button}
              onClick={!hasSelected ? this.selectDiscussion(data.id) : this.unSelectDiscussion}
            >
              { !hasSelected ? 'Просмотр' : 'Закрыть' }
            </Button>
          </div>
        </div>
      }) }

      { hasSelected && <div className={styles.dis}>
        <h5 className={styles.title}>Комментировать</h5>
        <textarea
            placeholder={'Введите комментарий'}
            value={comment}
            onChange={this.setComment}
            className={styles.textArea}
        />
        <Button onClick={this.comment}>
          Отправить
        </Button>
      </div> }

      { hasSelected && <>
        { discussion.children.map(data => {
          return <div
            className={styles.dis}
            key={data.id}
          >
            <p className={cn(styles.text, styles.noIndent)}>{ data.question }</p>
            <div className={styles.info}>
              <span className={styles.infoItem}>Автор: { data.user.first_name }</span>
              <span className={styles.infoItem}>Создано: {wmsToDDMonthNameYYYY(Number(data.created) * 1000)}</span>
            </div>
          </div>
        }) }
      </> }


    </div>;
  }
}


Discussions.propTypes = {};

Discussions.defaultProps = {};


export default Discussions;
