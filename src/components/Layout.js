import React from 'react';
import {Outlet} from "react-router-dom"; // to render chhild elemetns used by paernt element
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    
    </>
  )
}

export default Layout;