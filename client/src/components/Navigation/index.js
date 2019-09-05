import React from 'react';
import logo from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <nav className = "flex flex-row xxsm:flex-col items-center justify-between xxsm:justify-center flex-wrap bg-white p-6">
      {/* Logo side */}
      <div className="flex items-center flex-shrink-0 text-white mr-6 xxsm:mr-0 xxsm:p-4">
        <img className = "mr-2" src={logo} alt="Tubik logo"/>
      </div>

      {/* Right side */}
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
  );
}

export default Navigation;