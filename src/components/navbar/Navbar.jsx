import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Layout, AutoComplete, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import _throttle from 'lodash/throttle';

import { ROUTES } from '../../routes';

import styles from './Navbar.module.css';

const { Header } = Layout;

const Navbar = () => {
  const [isTransparent, setTransparent] = useState(false);
  const handleScroll = _throttle(() => {
    if (window.scrollY > 1) {
      setTransparent(true);
    } else {
      setTransparent(false);
    }
  }, 500);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <Header
      className={`${styles.navbarHeader} ${
        isTransparent ? styles.transparent : ''
      }`}
    >
      <div className={styles.leftContainer}>
        <Link to={ROUTES.ROOT} className={styles.logoLink}>
          <img
            className={styles.logoImage}
            src="travel-diaries-logo.png"
            alt="logo"
          />
        </Link>
        <AutoComplete
          placeholder="Search..."
          onSearch={(value) => console.log(value)}
          className={styles.searchBar}
        />
      </div>
      <div className={styles.userContainer}>
        {/* <Avatar icon={<UserOutlined />} />
        <span>User123</span> */}
        <Link to={ROUTES.LOGIN}>
          <Button className={styles.loginButton} type="primary">
            Log in
          </Button>
        </Link>
      </div>
    </Header>
  );
};

export default Navbar;
