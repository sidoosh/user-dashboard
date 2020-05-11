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
    <div className={styles.page}>
      <Header />
      {!isLoading ?
        <div className={styles.container}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <legend> Sign In</legend>
            <div className={styles.formItem}>
              {/* <label for="uname">Username</label> */}
              <input
                type="text"
                name="accountId"
                onChange={props.handleInputChange}
                value={props.accountId || ''}
                required
                placeholder="Account Id"
              />
            </div>
            <div className={styles.formItem}>
              {/* <label for="password">Password</label> */}
              <input
                type="text"
                name="pswd"
                onChange={props.handleInputChange}
                value={props.pswd || ''}
                placeholder="Password"
                required
              />
            </div>
            <div className={styles.btnCtn}>
              <button type="submit">Login</button>
            </div>
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
