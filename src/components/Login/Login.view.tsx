'use client'
import React, { useState } from 'react';
import useLogin from './login.presenter';
import { loginStyle as style } from './login.tailwind';

const Login = () => {
  // login state and logic handler functions
  const {state,submitHandler, changeHandler}=useLogin();

  return (
    <div className={style.login_cont}>
      <div className={style.login_box}>
        <h2 className={style.h2}>Login</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={state.email}
              onChange={changeHandler}
              className={style.input}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className={style.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={style.input}
              placeholder="Enter your password"
              value={state.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <button
              type="submit"
              className={style.button}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
