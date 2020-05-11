import React from 'react';
import { connect } from 'dva';
import styles from './ErrorPage.css';
import Header from '../../components/header';

function ErrorPage(props) {

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.messageContainer}>
        {props.location.state && props.location.state.data === 'fromUsers' ?
          <div className={styles.message}> Token expired, Please login again!</div>
          :
          <div className={styles.message}>Incorrect user details, Please try again!</div>}
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
};

export default connect()(ErrorPage);
