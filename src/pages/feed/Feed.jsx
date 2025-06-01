import React from 'react';

import Navbar from '../../components/navbar/Navbar';

function Feed() {
  // useEffect(() => {
  //   fetch('http://localhost:5050/users?name=Ned%20Stark', {
  //     method: 'GET',
  //     credentials: 'include',
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Feed;
