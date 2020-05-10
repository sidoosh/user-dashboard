import React from 'react';
import styles from './Header.css';
import Logo from '../../assets/logo-apertum.png';
import LogoWebp from '../../assets/logo-apertum.webp';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <picture>
          <source srcSet={LogoWebp} type="image/webp" />
          <img className={styles.headerLogo} src={Logo} alt="logo" />
        </picture>
      </div>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
