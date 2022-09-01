import { Fragment } from 'react';
import Head from 'next/head';
import cx from 'classnames';
import Link from 'next/link';
import styles from '../../styles/Login.module.css';

function Login() {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <main className={cx(styles["form-signin"],"mt-5")}>
      <h2>Login</h2>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 w-100">
                <button type="submit" className="btn btn-primary">Login</button>
                <label className="form-check-label float-end"><Link href="/register">Create account</Link></label>
            </div>
          </form>
        </div>
      </div>
      </main>
    </Fragment>
  )
}

export default Login;