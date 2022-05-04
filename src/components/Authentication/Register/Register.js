import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import Loading from "../../Utilities/Spinner/Loading.js"
import GoogleLogin from "../GoogleLogin/GoogleLogin.js"
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { Link, useNavigate } from "react-router-dom";

import auth from "../../../firebase.init.js";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const [tos, setTos] = useState(false);

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading/>;
  }

  if (user) {
    console.log(user?.user?.email);
    console.log(user?.user?.displayName);
    toast(`Welcome ${user?.user?.displayName}. Please verify your email. Check your mail`);
    navigate("/");
  }

  if(error || updateError)
  {
    toast(`Error: ${error?.message}`)
    // toast(`Something went wrong`);
    navigate('/register')
  }
  
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const tos = event.target.terms.checked;
    console.log(name, email, password, tos);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
  };

  return (
    <div className="bg-slate-200 ">

      <div className="min-h-full flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to Paratronics
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleRegister}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px ">
              <div className="my-3">
                <label htmlFor="email-address" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="my-3">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
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
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  onClick={() => setTos(!tos)}
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className={`h-4 w-4 focus:ring-cyan-500 border-gray-300 rounded text-cyan-600 mr-2`}
                />
                <label
                  htmlFor="remember-me"
                  className={`"ml-2 block text-sm " ${
                    tos ? "text-gray-900 " : "text-red-600"
                  }`}
                >
                  I agree to Terms and Conditions.
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to=""
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!tos}
                className={`${
                  tos
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-500"
                    : "disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                }
                group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2   `}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
              <div className="text-1xl text-center mt-2 justify-content-center ">
                Have Account?
                <Link
                  to="/login"
                  className="font-medium mx-2 text-blue-600 hover:text-blue-500 text-decoration-none"
                >
                  Sign In
                </Link>
              </div>
              <GoogleLogin/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
