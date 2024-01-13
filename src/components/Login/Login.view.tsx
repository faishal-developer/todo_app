'use client'
import React, { useState } from 'react';
import useLogin from './login.presenter';

const Login = () => {
  const {state,submitHandler, changeHandler}=useLogin();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Login</h2>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={state.email}
              onChange={changeHandler}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md border border-solid border-1 border-primary outline-2 focus:outline-primary_op focus:outline-2 focus:border-red-500"
              placeholder="Enter your password"
              value={state.password}
              onChange={changeHandler}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
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
