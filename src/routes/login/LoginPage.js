import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './LoginPage.css';
import Header from '../../components/header';
import Loader from '../../components/loader';

function LoginPage(props) {
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true)
    props.handleSubmit(e)
  }
  return (
    <div className={styles.normal}>
      <Header />
      {!isLoading ?
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="accountId" onChange={props.handleInputChange} value={props.accountId || ''} />
            <input type="text" name="pswd" onChange={props.handleInputChange} value={props.pswd || ''} />
            <button type="submit">Login</button>
          </form>
        </div>
        :
        <Loader />
      }
    </div>
  );
}

export default connect(({
  login: {
    accountId,
    pswd
  },
}) => ({
  accountId,
  pswd,
}),
  (
    dispatch
  ) => ({
    handleInputChange(e) {
      const { name, value } = e.target;
      dispatch({ type: 'login/updateInputField', payload: { name, value } })
    },
    handleSubmit(e) {
      e.preventDefault();
      dispatch({ type: 'login/redirectPage' })
    },
  }))(LoginPage);
