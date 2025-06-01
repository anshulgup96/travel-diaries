import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPosts } from '../../reducers/postsReducer';

import Navbar from '../../components/navbar/Navbar';

function Feed() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:5050/posts', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => dispatch(setPosts(res)));
  }, [dispatch]);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Feed;
