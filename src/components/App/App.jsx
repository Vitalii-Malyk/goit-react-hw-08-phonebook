// import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import HomePage from 'Page/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
