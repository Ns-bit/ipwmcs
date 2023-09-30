import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import { IconContext } from 'react-icons';

const NavigationBar = (props) => {
  const [isDropped, setIsDropped] = useState(false);

  const selectedMenu = (chosenMenu) => {
    props.handleLinkClick(chosenMenu);
    setIsDropped(false);
  };

  return (
    <>
      <nav className="fixed flex justify-between items-center py-2 w-full lg:px-24 md:px-9 px-4 content-center bg-white z-10">
        <div
          onClick={() => props.handleLinkClick('home')}
          className="flex items-center justify-center cursor-pointer"
        >
          <IconContext.Provider
            value={{ color: 'rgb(194 65 12)', size: '40px' }}
          >
            <FaHandshake />
          </IconContext.Provider>
          <div className="ml-1 font-bold italic text-orange-700">
            <h2>IPWMCS</h2>
          </div>
        </div>
        {/* Desktop Navbar */}
        <ul className="hidden lg:flex items-center">
          <li className="mx-3">
            <div
              onClick={() => props.handleLinkClick('home')}
              className="grow-underline cursor-pointer"
            >
              Home
            </div>
          </li>
          <li className="grow-underline mx-3">
            <div
              onClick={() => props.handleLinkClick('how-it-works')}
              className="cursor-pointer"
            >
              How it works
            </div>
          </li>
          <li className="grow-underline mx-3">
            <div
              onClick={() => props.handleLinkClick('services')}
              className="cursor-pointer"
            >
              Services
            </div>
          </li>
          <li className="grow-underline mx-3">
            <div
              onClick={() => props.handleLinkClick('who-we-are')}
              className="cursor-pointer"
            >
              Who we are
            </div>
          </li>
          <li className="grow-underline mx-3">
            <div
              onClick={() => props.handleLinkClick('membership')}
              className="cursor-pointer"
            >
              Membership
            </div>
          </li>
          <li className="grow-underline mx-3">
            <div
              className="cursor-pointer"
              onClick={() => props.handleLinkClick('faq')}
            >
              FAQ
            </div>
          </li>
        </ul>
        <div className="block ">
          <button
            onClick={() => props.handleLinkClick('login')}
            className="mr-6"
          >
            Login
          </button>
          <button
            onClick={() => props.handleLinkClick('signup')}
            className="py-2 px-4 text-white bg-red-500 rounded-3xl"
          >
            Signup
          </button>
        </div>
        <div onClick={() => setIsDropped(true)} className="lg:hidden">
          <IconContext.Provider value={{ size: '40px', color: 'blue' }}>
            <FcMenu />
          </IconContext.Provider>
        </div>
      </nav>

      <div
        className={`px-4 py-6 fixed top-0 right-0 border-b-4 bg-secondary z-20 ${
          isDropped
            ? 'opacity-100 translate-y-0 ease-in-out transition-all duration-500 w-full'
            : 'opacity-0 translate-y-[-10px] w-0'
        }`}
      >
        <div onClick={() => setIsDropped(false)} className="flex justify-end">
          <img src="images/Cross.svg" alt="Close Menu" className="h-16 w-16" />
        </div>
        <ul className="flex flex-col mx-8 my-24 items-center text-3xl">
          <li className="my-6">
            <div onClick={() => selectedMenu('home')}>Home</div>
          </li>
          <li className="my-6">
            <div onClick={() => selectedMenu('how-it-works')}>How it works</div>
          </li>
          <li className="my-6">
            <div onClick={() => selectedMenu('services')}>Services</div>
          </li>
          <li className="my-6">
            <div onClick={() => selectedMenu('who-we-are')}>Who we are</div>
          </li>
          <li className="my-6">
            <div onClick={() => selectedMenu('membership')}>Membership</div>
          </li>
          <li className="my-6">
            <div onClick={() => selectedMenu('faq')}>FAQ</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
