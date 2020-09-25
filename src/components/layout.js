import React from 'react';
import { Link } from 'gatsby';
import SantosLuis from '@assets/santos-luis.svg';
import styles from './layout.module.scss';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header, mainClassName, footerClassName;

  if (!isRootPath) {
    header = (
      <Link className={styles.headerLinkHome} to="/">
        {title}
      </Link>
    );
    mainClassName = styles.nonRootMainClassName;
    footerClassName = styles.nonRootFooterClassName;
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>{header}</header>
      <main className={mainClassName}>{children}</main>
      <footer className={footerClassName}>
        {new Date().getFullYear()}, Built by
        {' '}
        <SantosLuis className={styles.globalWrapper__logo} />
      </footer>
    </div>
  );
};

export default Layout;
