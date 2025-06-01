import React from 'react';
import { Link } from 'react-router';
import { Layout, AutoComplete, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { ROUTES } from '../../routes';

import styles from './Navbar.module.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className={styles.navbarHeader}>
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
