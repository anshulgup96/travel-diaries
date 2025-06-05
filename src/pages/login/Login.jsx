import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Input } from 'antd';
import { Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';

import styles from './Login.module.css';

function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.loginContainer}>
      <div>
        <img
          className={styles.heroImg}
          src="login-page-background.jpg"
          alt="login background"
        />
        <h1>Join a community of travellers, and plan your next vacation!</h1>
      </div>
      <div className={styles.formContainer}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          useOneTap
        />
        <p>OR</p>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
          <Controller
            name="username"
            control={control}
            rules={{ required: 'The username is required' }}
            render={({ field }) => (
              <Input
                {...field}
                status={errors.username?.message ? 'error' : ''}
                placeholder="Enter username"
              />
            )}
          />
          <p>{errors.username?.message}</p>
          <Controller
            name="password"
            control={control}
            rules={{ required: 'The password is required' }}
            render={({ field }) => (
              <Input.Password
                {...field}
                placeholder="Enter password"
                status={errors.password?.message ? 'error' : ''}
              />
            )}
          />
          <p>{errors.password?.message}</p>
          <Button htmlType="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
