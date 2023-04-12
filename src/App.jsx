import React from 'react';
import { Toaster } from 'react-hot-toast';

import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header></Header>
     <Outlet></Outlet>
     <Toaster />
    </div>
  );
};

export default App;