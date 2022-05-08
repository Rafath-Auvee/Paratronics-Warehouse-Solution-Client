import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css"
export default function Footer() {
  return (
    <footer className="pb-2 pt-4 text-gray-200 bg-black">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y divide-gray-900 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Company</h2>
            <ul className="space-y-4 text-md">
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Merch
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Brand
                </Link>
              </li>{" "}
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Meetups
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Newsroom</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-2xl tracking-wide text-white">Products</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Hosting
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Domains
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  SSL
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-2xl tracking-wide text-white">Connect</h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 text-xl custom_link "
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-red-500 transition-colors duration-200 font-semibold text-xl custom_link"
                  to="https://github.com/Rafath-Bin-Zafar-Auvee"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                to="https://github.com/Rafath-Bin-Zafar-Auvee"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold custom_link"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/Rafath-Bin-Zafar-Auvee"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold custom_link"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/Rafath-Bin-Zafar-Auvee"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold custom_link"
              >
                Ad Choices
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/Rafath-Bin-Zafar-Auvee"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold custom_link"
              >
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/Rafath-Bin-Zafar-Auvee"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold custom_link"
              >
                Partners
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              to="https://github.com/Rafath-Bin-Zafar-Auvee"
              className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold custom_link tracking-tight"
            >
             Paratronics © 2022 Warehouse Solution.
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}