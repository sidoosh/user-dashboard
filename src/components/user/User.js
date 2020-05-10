import React from 'react';
import styles from './User.css';

const User = (props) => {
  return (
    <div className={styles.usrContainer}>
      <div className={styles.avatarContainer}>
        <div></div>
        <div className={styles.textContainer}>{props.firstName} {props.lastName}</div>
      </div>
    </div>
  )
};


export default User;
