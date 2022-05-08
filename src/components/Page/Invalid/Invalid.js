import React from "react";
import {  useNavigate } from "react-router-dom";
const Invalid = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="flex flex-col items-center justify-center w-screen h-screen bg-lime-400">
        <h3 className="text-6xl text-indigo-500 md:text-7xl lg:text-8xl">404</h3>
        <h5 className="text-2xl text-indigo-700 md:text-7xl lg:text-3xl">
          {" "}
          Page not found!
        </h5>
        <h5 className="text-2xl text-indigo-700 md:text-7xl lg:text-3xl">
          {" "}
          Sorry, we couldn't find the page you are looking for.
        </h5>

        <button
          className="focus:outline-none mt-3 text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          onClick={async () => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Invalid;
