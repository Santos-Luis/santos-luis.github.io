import React from 'react';
import Header from '@components/header';
import styles from './layout.module.scss';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const mainClass = isRootPath ? '' : styles.nonRootMainClass;

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <header className={styles.globalHeader}>
        <Header />
      </header>
      <main className={mainClass}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Powered by <a href="https://www.gatsbyjs.com/">Gatsby</a>.<br/>
          You can find the blog source code <a href="https://github.com/Santos-Luis/santos-luis.github.io">here</a>.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
