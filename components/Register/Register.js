import React, { Fragment } from 'react';
import Head from 'next/head';
import cx from 'classnames';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Login.module.css';
import registerAPI from '../../pages/api/register';
import { toastError, toastSuccess } from '../../pages/constants';

const schema = yup.object({
  firstName: yup.string().required('Required').min(3).max(20),
  lastName: yup.string().required('Required').min(3).max(20),
  email: yup.string().required('Required').email().max(30),
  password: yup.string().required('Required').min(6).max(10),
  confirmpassword: yup.string().required('Required').min(3).max(10).oneOf([yup.ref('password'), null], 'Passwords must match')
}).required();

function Register({ loader, setLoader } = props) {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    setLoader(true);
    delete data.confirmpassword
    data = JSON.stringify(data);
    const response = await registerAPI(data);
    if (!response.success) {
      toastError(response.error);
    } else {
      toastSuccess('User successfully created');
      reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: ''
      });
    }
    setLoader(false);
  }
  return (
    <Fragment>
      <Head>
        <title>Register</title>
      </Head>
      <main className={cx(styles["form-signin"],"mt-5")}>
      <h2>Register</h2>
      <div className={`card ${loader ? "form-disable" : ""}`}>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputFirstName" className="form-label">First Name <span className={cx(styles["errorMessage"])}>{errors.firstName?.message}</span></label>
              <input {...register('firstName')} type="text" name="firstName" id="exampleInputFirstName" className={`form-control ${errors.firstName?.message ? "border-danger" : ""}`}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputLastName" className="form-label">Last Name <span className={cx(styles["errorMessage"])}>{errors.lastName?.message}</span></label>
              <input {...register('lastName')} type="text" name="lastName" className={`form-control ${errors.lastName?.message ? "border-danger" : ""}`} id="exampleInputLastName"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">Email Address <span className={cx(styles["errorMessage"])}>{errors.email?.message}</span></label>
              <input {...register('email')} type="text" name="email" className={`form-control ${errors.email?.message ? "border-danger" : ""}`} id="exampleInputEmail"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">Password <span className={cx(styles["errorMessage"])}>{errors.password?.message}</span></label>
              <input {...register('password')} type="password" name="password" className={`form-control ${errors.password?.message ? "border-danger" : ""}`} id="exampleInputPassword"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputconfirmpassword" className="form-label">Confirm Password <span className={cx(styles["errorMessage"])}>{errors.confirmpassword?.message}</span></label>
              <input {...register('confirmpassword')} type="password" name="confirmpassword" className={`form-control ${errors.confirmpassword?.message ? "border-danger" : ""}`} id="exampleInputconfirmpassword"/>
            </div>
            <div className="mb-3 w-100">
                <button type="submit" className="btn btn-primary">Register</button>
                <label className="form-check-label float-end"><Link href="/">Login here</Link></label>
            </div>
          </form>
        </div>
      </div>
      </main>
    </Fragment>
  )
}

export default Register;