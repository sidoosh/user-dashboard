import React from 'react';
import { connect } from 'dva';
import styles from './UsersPage.css';
import User from '../../components/user';
import Header from '../../components/header';

function UsersPage(props) {
  return (
    <div className={styles.grid}>
      <Header />
      <div>
        <h1 className={styles.title}>User Dashboard</h1>
        <button onClick={props.handleFilter}>Apply Filter!</button>
      </div>
      <div className={styles.usersContainer}>
        {props.list.length > 0 &&
          props.list.map((item, index) => <User key={index} {...item} />
          )}
      </div>
    </div>
  );
}

UsersPage.propTypes = {
};

export default connect(({
  users: {
    filteredUsers: list = [],
  },
}) => ({
  list
}),
  (
    dispatch
  ) => ({
    handleFilter(e) {
      dispatch({ type: 'users/toggleFilter' })
    },
  }))(UsersPage);
