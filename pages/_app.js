import React, { useState } from 'react';
import {Layout} from '../components/shared';
import { Circles } from  'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import Router from 'next/router';
import ProtectedRoutes from "../routes/ProtectedRoutes";
import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const [ loader, setLoader ] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  return <>
    <Layout abcd="1234" isUserLoggedIn={isUserLoggedIn} userInfo={userInfo}>
      <ProtectedRoutes router={Router} isUserLoggedIn={isUserLoggedIn} setUserLoggedIn={setUserLoggedIn} userInfo={userInfo} setUserInfo={setUserInfo}>
        <Component {...pageProps} loader={loader} setLoader={setLoader} userInfo={userInfo}/>
      </ProtectedRoutes>
      <ToastContainer />
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="centered"
        visible={loader}
      />
    </Layout>
  </>
}

export default MyApp
