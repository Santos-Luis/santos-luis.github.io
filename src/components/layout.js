import React from 'react';
import { Link } from 'gatsby';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import SantosLuisLogo from '@assets/santos-luis-logo.svg';
import styles from './layout.module.scss';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let mainClassName, footerClassName;

  const header = (
      <React.Fragment>
        <Link className={styles.headerLinkHome} to="/">
          <SantosLuisLogo className={styles.headerLogo} />
        </Link>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler>
      </React.Fragment>
  );

  if (!isRootPath) {
    mainClassName = styles.nonRootMainClassName;
    footerClassName = styles.nonRootFooterClassName;
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>{header}</header>
      <main className={mainClassName}>{children}</main>
      <footer className={footerClassName}>
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
