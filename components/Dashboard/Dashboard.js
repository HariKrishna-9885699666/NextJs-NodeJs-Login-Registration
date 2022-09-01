import { Fragment } from 'react';
import Head from 'next/head';
import { capitalize } from '../../lib/constants';

function DashBoard({userInfo} = props) {
  return (
    <Fragment>
      <Head>
        <title>DashBoard</title>
      </Head>
      <main className="mt-5 text-center">
        <h1>Welcome to DashBoard, {capitalize(userInfo?.name)}</h1>
      </main>
    </Fragment>
  )
}

export default DashBoard;