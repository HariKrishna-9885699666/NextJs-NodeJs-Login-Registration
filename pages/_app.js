import React, { useState } from 'react';
import {Layout} from '../components/shared';
import { Circles } from  'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const [ loader, setLoader ] = useState(false);
  return <>
    <Layout>
      <Component {...pageProps} loader={loader} setLoader={setLoader} />
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
