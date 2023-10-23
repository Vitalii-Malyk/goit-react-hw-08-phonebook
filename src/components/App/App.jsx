import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Layout from 'components/Layout/Layout';
import Loader from 'components/Loading/Loading';
// import { useDispatch, useSelector } from 'react-redux';

const LoginPage = lazy(() => import('Page/Login/LoginPage'));
const RegistrationPage = lazy(() =>
  import('Page/Registration/RegistrationPage')
);
const HomePage = lazy(() => import('Page/Home/HomePage'));
const UserPage = lazy(() => import('Page/User/UserPage'));

const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(state => state.auth.token);
  // const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
