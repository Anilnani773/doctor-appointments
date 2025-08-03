import React from "react";
import { Link } from "react-router-dom";

import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          {/* <img className="mb-5 w-40" src={assets.logo} alt="" /> */}
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              className="w-[50px] h-[50px] "
              src={assets.logo}
              alt=""
              width={10}
              height={10}
            />
            <span className="font-bold text-primary text-xl">MediCare</span>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            {/* <li>
              <Link to="/privacy-policy">Admin</Link>
            </li> */}
            <li>
              <a
                href="https://medi-care-admin-kohl.vercel.app/"
                target="_blank"
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Admin Panel
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+234-813-753-7121</li>
            <li>jimohsegunj@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 MediCare - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
