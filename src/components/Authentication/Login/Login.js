import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  useCreateUserWithEmailAndPassword,
} from "firebase/auth";

import { useAuthState,  } from "react-firebase-hooks/auth";

import auth from "../../../firebase.init.js";
import {toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [createUserWithEmailAndPassword, user, loading, error] =
  //   useCreateUserWithEmailAndPassword(auth);
  const notify = () => toast("Wow so easy !");

  return (
    <div>Login</div>
    // <button onClick={notify}>Notify !</button>
  );
};

export default Login;
