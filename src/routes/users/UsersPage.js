import React from 'react';
import { connect } from 'dva';
import styles from './UsersPage.css';
import User from '../../components/user';
import Header from '../../components/header';
import Loader from '../../components/loader';

const getList = (list) => {
  let count = 0;
  let items = [];
  let temp = []
  list.forEach((item) => {
    if (count === 2) {
      items.push(<div className={styles.listContainer} key={item.firstName}>
        {temp.shift()}
        {temp.shift()}
      </div>
      )
      count = 0
    }
    temp.push(<User key={item.accountId} {...item} />)
    count++
  });

  //Empty last two elements from queue
  if (temp.length > 0) {
    items.push(<div className={styles.listContainer} key={'test124'}>
      {temp.shift()}
      {temp.shift()}
    </div>)
  }

  return items;
}
function UsersPage(props) {
  return (
    <div className={styles.grid}>
      <Header />
      <div className={styles.topHeader}>
        <h1 className={styles.title}>User Dashboard</h1>
        <button className={`${styles.button} ${props.applyFilter ? '' : styles.filter}`} onClick={props.handleFilter}>Apply Filter</button>
      </div>
      <div className={styles.usersContainer}>
        {props.list.length > 0 ?
          getList(props.list)
          :
          <Loader />
        }
      </div>
    </div>
  );
}

UsersPage.propTypes = {
};

export default connect(({
  users: {
    filteredUsers: list = [],
    applyFilter
  },
}) => ({
  list,
  applyFilter
}),
  (
    dispatch
  ) => ({
    handleFilter(e) {
      dispatch({ type: 'users/toggleFilter' })
    },
  }))(UsersPage);
