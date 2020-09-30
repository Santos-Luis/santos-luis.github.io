import React from 'react';
import { Link } from 'gatsby';
import SantosLuisLogo from '@assets/santos-luis-logo.svg';
import styles from './layout.module.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let mainClassName, footerClassName;

  const header = (
      <React.Fragment>
        <Link className={styles.headerLinkHome} to="/">
          <SantosLuisLogo className={styles.headerLogo} />
        </Link>
        {title}
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
