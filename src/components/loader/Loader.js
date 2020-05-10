import React from 'react';
import styles from './Loader.css';
import Logo from '../../assets/logo-apertum.png';

const Loader = (props) => {
  return (
    <div className={styles.overlayLoader}>
      <div className={styles.overlayMiddle}>
        <div className={styles.overlayContent}>
          <img className={styles.logoZoom} src={Logo} alt='loader' />
        </div>
      </div>
    </div>
  )
};


export default Loader;
