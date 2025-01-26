import React from "react";

const Footer = () => {
  return (
    <div className="container mb-8 mx-auto px-4 sm:px-6 lg:px-8 py-6 text-lg text-center ">
      <p className="text-white">
        Made by{" "}
        <a
          href="https://twitter.com/megh_bari"
          target="_blank"
          rel="noreferrer"
          className="hover:text-slate-300 transition duration-200"
        >
          @megh_bari
        </a>
      </p>
      <p className="text-gray-400 text-sm mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
