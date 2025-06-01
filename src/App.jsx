import { Routes, Route, BrowserRouter, Navigate } from 'react-router';

import Add from './pages/add/Add';
import Feed from './pages/feed/Feed';
import Login from './pages/login/Login';
import Signup from './pages/signup/Singup';

import { ROUTES } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.FEED} />} />
        <Route path={ROUTES.ADD} element={<Add />} />
        <Route path={ROUTES.FEED} element={<Feed />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
