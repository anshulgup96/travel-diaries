import React from 'react';

import styles from './Post.module.css';

function Post({ name }) {
  return <div className={styles.post}>{name}</div>;
}

export default Post;
