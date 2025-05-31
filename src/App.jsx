import { Routes, Route, BrowserRouter } from 'react-router';

import Root from './pages';
import Add from './pages/add/Add';
import Feed from './pages/feed/Feed';
import Login from './pages/login/Login';
import Signup from './pages/signup/Singup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/add" element={<Add />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
