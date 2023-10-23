import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import HomePage from 'Page/Home/HomePage';
import UserPage from 'Page/User/UserPage';
import { Suspense, lazy } from 'react';

import Loader from 'components/Loading/Loading';

const Login = lazy(() => import('Page/Login/LoginPage'));
const Registration = lazy(() => import('Page/Registration/RegistrationPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="user" element={<UserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;