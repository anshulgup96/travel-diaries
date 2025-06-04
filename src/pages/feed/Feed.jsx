import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { FloatButton } from 'antd';

import { fetchPosts } from '../../reducers/postsReducer';

import { ROUTES } from '../../routes';

import Navbar from '../../components/navbar/Navbar';
import Post from '../../components/Post/Post';

import styles from './Feed.module.css';

function Feed() {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    let promise;
    if (!posts.length) {
      promise = dispatch(fetchPosts());
    }
    return () => {
      if (promise) promise.abort();
    };
  }, [dispatch, posts.length]);
  return (
    <div>
      <Navbar />
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
      <Link to={ROUTES.ADD}>
        <FloatButton
          className={styles.addPostButton}
          type="primary"
          description="Add +"
        />
      </Link>
    </div>
  );
}

export default Feed;
