import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';

import Layout from 'components/Layout/Layout';
import { Loader } from 'components/Loading/Loading';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authOperations';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { Toaster } from 'react-hot-toast';

const LoginPage = lazy(() => import('Page/Login/LoginPage'));
const RegistrationPage = lazy(() =>
  import('Page/Registration/RegistrationPage')
);
const HomePage = lazy(() => import('Page/Home/HomePage'));
const UserPage = lazy(() => import('Page/User/UserPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const MyToaster = () => {
    return (
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'rgb(250, 235, 215)',
            },
          },
          error: {
            style: {
              background: 'rgb(248, 208, 155)',
            },
          },
        }}
        containerStyle={{
          top: '70px',
        }}
      />
    );
  };

  return (
    <>
      <MyToaster />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />
            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
