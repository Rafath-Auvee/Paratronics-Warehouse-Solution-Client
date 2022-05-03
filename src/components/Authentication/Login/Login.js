import React, { useState } from 'react';
import { useLocation, useNavigate,Link} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init.js';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  if (error) {
    return toast(`Error: ${error.message}`
    );
  }
  if (loading) {
    return <Spinner animation="grow" variant="dark"/>
  }
  if (user) {
    return toast(`Welcome ${user.email}`)
    
  }
  return (
    <div>
      Login
    </div>
  );
};

export default Login;