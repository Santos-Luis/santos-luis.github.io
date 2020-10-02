import React from 'react';
import Header from '@components/header';
import styles from './layout.module.scss';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let mainClassName, footerClassName;

  if (!isRootPath) {
    mainClassName = styles.nonRootMainClassName;
    footerClassName = styles.nonRootFooterClassName;
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>
        <Header />
      </header>
      <main className={mainClassName}>{children}</main>
      <footer className={footerClassName}>
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
