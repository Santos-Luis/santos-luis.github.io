import React from 'react';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import SantosLuisLogo from '@assets/santos-luis-logo.svg';
import moon from '@assets/moon.png';
import sun from '@assets/sun.png';
import styles from './header.module.scss';

const Header = () => (
  <React.Fragment>
    <Link to="/" aria-label="homepage">
      <SantosLuisLogo className={styles.headerLogo} />
    </Link>
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="image"
            src={theme === 'light' ? moon : sun}
            style={{ outline: 'none' }}
            alt="Change theme"
            onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
            width="24px"
          />
        </label>
      )}
    </ThemeToggler>
  </React.Fragment>
);

export default Header;
