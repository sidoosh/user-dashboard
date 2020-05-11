import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <picture>
          <source srcSet={require('../../assets/logo-apertum.webp')} type="image/webp" />
          <img className={styles.headerLogo} src={require('../../assets/logo-apertum.png')} alt="logo" />
        </picture>
      </div>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
