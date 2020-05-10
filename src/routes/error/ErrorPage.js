import React from 'react';
import { connect } from 'dva';
import styles from './ErrorPage.css';
import Header from '../../components/header';

function ErrorPage(props) {

  return (
    <div className={styles.normal}>
      <Header />
      <div>
        {props.location.state.data === 'fromUsers' ?
          <div> Token expired, Please login again!</div>
          :
          <div>Incorrect user details, Please try again!</div>}
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
};

export default connect()(ErrorPage);
