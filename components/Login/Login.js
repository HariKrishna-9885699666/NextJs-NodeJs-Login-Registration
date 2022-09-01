import { Fragment } from 'react';
import Head from 'next/head';
import cx from 'classnames';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Router from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Pages.module.css';
import { toastError, toastSuccess } from '../../lib/constants';
import loginAPI from '../../pages/api/login';

const schema = yup.object({
  email: yup.string().required('Required').email().max(30),
  password: yup.string().required('Required').min(6).max(10)
}).required();

function Login({ loader, setLoader } = props) {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    setLoader(true);
    data.username = data.email;
    delete data.email
    data = JSON.stringify(data);
    const response = await loginAPI(data);
    if (!response.success) {
      toastError(response.error);
    } else {
      const user = response?.data?.data;
      localStorage.setItem('userInfo', JSON.stringify({
        name: user.name,
        email: user.email
      }));
      Router.push('/dashboard')
    }
    setLoader(false);
  }
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <main className={cx(styles["form-signin"],"mt-5")}>
      <h2>Login</h2>
      <div className={`card ${loader ? "form-disable" : ""}`}>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className={cx(styles["errorMessage"])}>{errors.email?.message}</span></label>
              <input {...register('email')} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password <span className={cx(styles["errorMessage"])}>{errors.password?.message}</span></label>
              <input {...register('password')} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
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