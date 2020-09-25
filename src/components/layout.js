import React from 'react';
import { Link } from 'gatsby';
import SantosLuis from '@assets/santos-luis.svg';
import styles from './layout.module.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (!isRootPath) {
    header = (
      <Link className={styles.headerLinkHome} to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>{header}</header>
      <main>{children}</main>
      <footer>
        {new Date().getFullYear()}, Built by
        {' '}
        <SantosLuis className={styles.globalWrapper__logo} />
      </footer>
    </div>
  );
};

export default Layout;
