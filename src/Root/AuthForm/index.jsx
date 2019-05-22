import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Link from 'components/Link';

import oAuthStore from 'store/oAuthStore';

import styles from './styles.scss';


class AuthForm extends PureComponent {

  constructor(props) {
    super(props);

    this.attach(oAuthStore);
    this.store = oAuthStore;

    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  setPassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  };

  auth = () => {
    const { email, password } = this.state;
    this.store.auth(email, password);
  };

  render() {
    const { email, password } = this.state;

    return <div className={ styles.root }>
      <div className={styles.card}>
        <h1 className={styles.title}>Авторизация</h1>
        <TextInput
          onChange={this.setEmail}
          value={email}
          placeholder={'Email'}
          type={'email'}
        />
        <TextInput
          onChange={this.setPassword}
          value={password}
          placeholder={'Пароль'}
          type={'password'}
        />
        <Button onClick={this.auth}>
          Войти
        </Button>
        <Link to={'/reg'} className={styles.link}>
          Регистрация
        </Link>
      </div>
    </div>;
  }
}


AuthForm.propTypes = {};

AuthForm.defaultProps = {};


export default AuthForm;
