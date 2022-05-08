import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {Spinner, Button} from "react-bootstrap";
import { LockClosedIcon } from "@heroicons/react/solid";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../../Utilities/Spinner/Loading.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init.js";
import GoogleLogin from "../GoogleLogin/GoogleLogin.js"
import useToken from '../../Hooks/useToken.js';
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
  const [token] = useToken(user);
  if (loading || sending) {
    return <Loading />;
  }

  // if (user) {
  //   // console.log(user?.user?.email)
  //   // return (toast(`Welcome ${user?.user?.email}`));
  //   toast(`Welcome ${user?.user?.displayName}. Login Successfully`);
  //   navigate(from, { replace: true });
  // }

  if (token) {
    toast.success(`Welcome ${user?.user?.displayName}. Login Successfully`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // navigate(from, { replace: true });
    navigate("/")
  }

  if (error) {
    toast(`Error: ${error?.message}`);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = email_ref.current.value;
    const password = password_ref.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("https://intense-plains-05397.herokuapp.com/login", { email });
    localStorage.setItem("accessToken", data.accessToken);
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
      toast.error("please enter your email address");
    }
  };

  return (
    <div className="bg-slate-100 w-auto my-auto">
      <div className="container h-fit  flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
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
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
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
                <Button variant="link"
                  onClick={()=>resetPassword()}
                  className="font-medium text-cyan-600 hover:text-cyan-500"
                >
                  Forgot your password?
                </Button>
              </div>
            </div>
            <div className="text-1xl text-center mt-2 justify-content-center ">
              No Account?
              <Link
                to="/register"
                onClick={navigateRegister}
                className="font-medium mx-2 text-blue-600 hover:text-blue-500 text-decoration-none"
              >
                Create your account
              </Link>
            </div>
            <GoogleLogin/>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
