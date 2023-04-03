import { FC } from 'react';
import React from 'react';
import styles from './style.module.less';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';

const HomePage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.webName}>健康度平台</div>
      {/* <Link to={'/upload'} className={styles.title}>
        进入...
      </Link> */}
      <Link to={'/index'} className={styles.title}>
        进入...
      </Link>
      {/* <div className={styles.kobPage} onClick={openFilePage}></div> */}
    </div>
  );
};
export default HomePage;
