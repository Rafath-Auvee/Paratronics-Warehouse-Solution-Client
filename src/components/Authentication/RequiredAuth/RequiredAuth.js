import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init.js';
import Loading from '../../Utilities/Spinner/Loading.js';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if(error)
    {
      toast("Something went wrong. Please try again")
    }
    
    if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
        return <div class="flex flex-col items-center justify-center w-screen h-screen bg-indigo-600">
            <h3 className='text-2xl text-white md:text-7xl lg:text-4xl'>Email is not VERIFIED!!</h3>
            <h5 className='text-2xl text-white md:text-7xl lg:text-4xl'> Verify your email address</h5>
            <h5 className='text-2xl text-white md:text-7xl lg:text-4xl'> Check your email</h5>
            <button
            className='focus:outline-none mt-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Check your email. Verification sent');
                }}
            >
                Send Verification Email Again
            </button>
            
        </div>
    }

    return children;
};

export default RequireAuth;