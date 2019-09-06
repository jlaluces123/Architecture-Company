import React from 'react';
import logo from "../../assets/logo.svg";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="xl:px-16 lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-2 py-2">
      <div className="flex flex-1 justify-between items-center">

        {/* Logo */}
        <a href="/">
          <img src = {logo} alt = "tubik logo" />
        </a>
        </div>

        {/* Menu itself */}
        <label htmlFor="menu-toggle" className="block cursor-pointer lg:hidden xl:hidden">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </label>
        <input type="checkbox" id="menu-toggle" className="hidden"/>

        {/* Actual Navigation */}
        <nav className="hidden xl:flex lg:flex xl:items-center lg:items-center xl:items-center xl:w-auto lg:w-auto w-full" id="menu">
          <ul className="xl:flex lg:flex items-center justify-between text-base text-gray-700 pt-4 xl:pt-0 lg:pt-0">
            <li><a href="/" className="xl:p-4 lg:p-4 py-3 px-0 block border-b-2 border-transparent">One</a></li>
            <li><a href="/" className="xl:p-4 lg:p-4 py-3 px-0 block border-b-2 border-transparent">Two</a></li>
            <li><a href="/" className="xl:p-4 lg:p-4 py-3 px-0 block border-b-2 border-transparent">Three</a></li>
          </ul>
        </nav>
    </div>
  );
}

export default Navigation;

/*
<nav className = "flex flex-row xxsm:flex-col items-center justify-between xxsm:justify-center flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 xxsm:mr-0 xxsm:p-4">
        <img className = "mr-2" src={logo} alt="Tubik logo"/>
      </div>

      <div className="flex w-auto xxsm:w-full justify-end xxsm:justify-between items-center w-auto align-center flex-grow">
        <div className="w-4/12 xxsm:w-full flex justify-end xxsm:justify-between text-md lg:flex-grow">
          <a href="/" className="text-black font-bold mr-10 xxsm:mr-0 xsm:mr-6">Tags</a>
          <a href="/" className="text-black font-bold mr-10 xxsm:mr-0 xsm:mr-6">Archives</a>
          <a href="/" className="text-black font-bold mr-10 xxsm:mr-0 xsm:mr-6">Books</a>
        </div>
        <button className="flex items-center font-bold border border-black rounded-full py-3 px-10 xxsm:hidden xsm:hidden sm:flex md:flex lg:flex xl:flex hover:text-white hover:bg-black">
          Subscribe
        </button>
      </div>
    </nav>
*/