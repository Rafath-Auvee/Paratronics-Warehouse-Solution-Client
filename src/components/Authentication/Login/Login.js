import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { LockClosedIcon } from "@heroicons/react/solid";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.js";

const Login = () => {
  const email_ref = useRef("");
  const password_ref = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (user) {
    console.log(user?.user?.email)
    // return (toast(`Welcome ${user?.user?.email}`));
    // navigate(from, { replace: true });
  }
  
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = email_ref.current.value;
    const password = password_ref.current.value;

    await signInWithEmailAndPassword(email, password);
    // const { data } = await axios.post("http://localhost:5000/login", { email });
    // localStorage.setItem("accessToken", data.accessToken);
    if(user)
    {
      navigate("/inventory");
    }
    
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = email_ref.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="bg-slate-200 w-auto my-auto">
      <div className="container h-fit  flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="my-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  ref={email_ref}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  ref={password_ref}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <div className="text-center">
              <div className="text-sm">
                <Link
                  to=""
                  className="font-medium text-cyan-600 hover:text-cyan-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="text-1xl text-center mt-2 justify-content-center pb-8">
              No Account?
              <Link
                to="/register"
                onClick={navigateRegister}
                className="font-medium mx-2 text-blue-600 hover:text-blue-500 text-decoration-none"
              >
                Create your account
              </Link>
            </div>
          </form>
          {errorElement}
        </div>
      </div>
    </div>
  );
};
export default Login;
