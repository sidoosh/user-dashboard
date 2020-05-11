import React from 'react';
import styles from './User.css';

const User = (props) => {
  return (
    <div className={styles.usrContainer}>
      <div className={styles.avatarContainer}>
        <picture>
          <source srcSet={require('../../assets/acc.webp')} type="image/webp" />
          <img className={styles.accImg} src={require('../../assets/acc.png')} alt="logo" />
        </picture>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.accContainer}>
          <span className={styles.label}>Account Id: </span>{props.accountId}
        </div>
        <div className={styles.nameContainer}>
          <span className={styles.label}>Name: </span>{props.firstName} {props.lastName}</div>
        <div className={styles.ageContainer}> <span className={styles.label}>Age: </span>{props.age}</div>
      </div>
    </div>
  )
};


export default User;
