import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../reducers/postsReducer';

import Navbar from '../../components/navbar/Navbar';
import Post from '../../components/Post/Post';

import styles from './Feed.module.css';

function Feed() {
  const posts = useSelector((state) => state.postsReducer.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(fetchPosts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className={styles.postsContainer}>
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
