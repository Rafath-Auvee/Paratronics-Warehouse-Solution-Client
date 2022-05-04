import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Utilities/Spinner/Loading.js";
const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading) {
    return <Loading />;
  }

  if (user) {
    // console.log(user?.user?.email);
    console.log(user?.user?.photoURL)
    console.log(user?.user)
    // console.log(user?.user?.displayName);
    toast(
      `Welcome ${user?.user?.displayName}. Please verify your email. Check your mail`
    );
    navigate("/");
  }
  let errorMessage
  if (error) {
    // toast(`Error: ${error?.message}`);
    // toast(`Something went wrong`);
    errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    // navigate("/register");
  }

  return (
    <div>
      <div className="w-full my-2 sm:pl-2">
        <button
          onClick={() => signInWithGoogle()}
          className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login with Google
        </button>
        {errorMessage}
      </div>
      
    </div>
  );
};

export default GoogleLogin;
