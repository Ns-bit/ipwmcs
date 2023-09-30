import React, { useEffect, useState } from 'react';
import { FaHandshake, FaCloudDownloadAlt } from 'react-icons/fa';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FcMoneyTransfer, FcCurrencyExchange } from 'react-icons/fc';
import { BiSolidDashboard, BiSolidOffer, BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineStock } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoMenuSharp } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';
import { IconContext } from 'react-icons';

const Dashboard = () => {
  // const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(0);
  const [showSideBar, setShowSideBar] = useState(false);
  // const [theme, setTheme] = useState('light');
  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [theme]);
  // const handleThemeSwitch = () => {
  //   setChecked((prevState) => !prevState);
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  // };

  function makeActive(index) {
    setActive(index);
  }
  return (
    <>
      {/* SIDEBAR */}
      <section
        className={`fixed top-0 left-0 w-[280px] h-full bg-tlight z-[1000] font-lato transition duration-300 ease-in-out overflow-x-hidden`}
      >
        <a
          href="@"
          className="text-[24px] font-bold h-14 flex items-center text-tblue sticky justify-center top-0 left-0 bg-tlight z-[500] pb-5 box-content"
        >
          <div className="min-w-[60px] flex justify-center">
            <div className="flex items-center justify-center cursor-pointer">
              <IconContext.Provider
                value={{ color: 'rgb(194 65 12)', size: '40px' }}
              >
                <FaHandshake />
              </IconContext.Provider>
              <div className="ml-1 font-bold italic text-orange-700">
                <h2>IPWMCS</h2>
              </div>
            </div>
          </div>
        </a>
        <ul className="w-full mt-12">
          <li
            onClick={() => makeActive(0)}
            className={`h-12 bg-transparent ml-[6px] rounded-tl-3xl rounded-bl-3xl p-1 ${
              active === 0 &&
              'bg-tgrey relative before:absolute before:w-10 before:h-10 before:rounded-[50%] before:-top-10 before:right-0 before:-z-[1] before:shadow-[20px_20px_0_0_tgrey] after:absolute after:w-10 after:h-10 after:rounded-[50%] after:-bottom-10 after:right-0 after:-z-[1] after:shadow-[20px_20px_0_0_tgrey]'
            }`}
          >
            <div
              className={`cursor-pointer w-full h-full bg-tlight flex items-center rounded-[48px] text-[16px] whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 0 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar &&
                'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
              }`}
            >
              <div className="min-w-[calc(60px-((4px+6px)*2))] flex justify-center">
                <BiSolidDashboard />
              </div>
              <span>Dashboard</span>
            </div>
          </li>
          <li
            onClick={() => makeActive(1)}
            className={`h-12 bg-transparent ml-[6px] rounded-tl-3xl rounded-bl-3xl p-1 ${
              active === 1 &&
              'bg-tgrey relative before:absolute before:w-10 before:h-10 before:rounded-[50%] before:-top-10 before:right-0 before:-z-[1] before:shadow-[20px_20px_0_0_tgrey] after:absolute after:w-10 after:h-10 after:rounded-[50%] after:-bottom-10 after:right-0 after:-z-[1] after:shadow-[20px_20px_0_0_tgrey]'
            }`}
          >
            <div
              className={`cursor-pointer w-full h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 1 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar &&
                'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
              }`}
            >
              <div className="min-w-[calc(60px-((4px+6px)*2))] flex justify-center">
                <BiSolidOffer />
              </div>
              <span>Shares Value</span>
            </div>
          </li>
          <li
            onClick={() => makeActive(2)}
            className={`h-12 bg-transparent ml-[6px] rounded-tl-3xl rounded-bl-3xl p-1 ${
              active === 2 &&
              'bg-tgrey relative before:absolute before:w-10 before:h-10 before:rounded-[50%] before:-top-10 before:right-0 before:-z-[1] before:shadow-[20px_20px_0_0_tgrey] after:absolute after:w-10 after:h-10 after:rounded-[50%] after:-bottom-10 after:right-0 after:-z-[1] after:shadow-[20px_20px_0_0_tgrey]'
            }`}
          >
            <div
              className={`cursor-pointer w-full h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 2 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar &&
                'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
              }`}
            >
              <div className="min-w-[calc(60px-((4px+6px)*2))] flex justify-center">
                <AiOutlineStock />
              </div>
              <span>Monthly Shares</span>
            </div>
          </li>
          <li
            onClick={() => makeActive(3)}
            className={`h-12 bg-transparent ml-[6px] rounded-tl-3xl rounded-bl-3xl p-1 ${
              active === 3 &&
              'bg-tgrey relative before:absolute before:w-10 before:h-10 before:rounded-[50%] before:-top-10 before:right-0 before:-z-[1] before:shadow-[20px_20px_0_0_tgrey] after:absolute after:w-10 after:h-10 after:rounded-[50%] after:-bottom-10 after:right-0 after:-z-[1] after:shadow-[20px_20px_0_0_tgrey]'
            }`}
          >
            <div
              className={`cursor-pointer w-full h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 3 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar &&
                'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
              }`}
            >
              <div className="min-w-[calc(60px-((4px+6px)*2))] flex justify-center">
                <GiReceiveMoney />
              </div>
              <span>Thrift Savings</span>
            </div>
          </li>
          <li
            onClick={() => makeActive(4)}
            className={`h-12 bg-transparent ml-[6px] rounded-tl-3xl rounded-bl-3xl p-1 ${
              active === 4 &&
              'bg-tgrey relative before:absolute before:w-10 before:h-10 before:rounded-[50%] before:-top-10 before:right-0 before:-z-[1] before:shadow-[20px_20px_0_0_tgrey] after:absolute after:w-10 after:h-10 after:rounded-[50%] after:-bottom-10 after:right-0 after:-z-[1] after:shadow-[20px_20px_0_0_tgrey]'
            }`}
          >
            <div
              className={`cursor-pointer w-full h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 4 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar &&
                'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
              }`}
            >
              <div className="min-w-[calc(60px-((4px+6px)*2))] flex justify-center">
                <FcMoneyTransfer />
              </div>
              <span>Special Savings</span>
            </div>
          </li>
          <li
            onClick={() => makeActive(5)}
            className={`h-12 bg-transparent ml-[6px] rounded-tl-3xl rounded-bl-3xl p-1 ${
              active === 5 &&
              'bg-tgrey relative before:absolute before:w-10 before:h-10 before:rounded-[50%] before:-top-10 before:right-0 before:-z-[1] before:shadow-[20px_20px_0_0_tgrey] after:absolute after:w-10 after:h-10 after:rounded-[50%] after:-bottom-10 after:right-0 after:-z-[1] after:shadow-[20px_20px_0_0_tgrey]'
            }`}
          >
            <div
              className={`cursor-pointer w-full h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 5 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar &&
                'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
              }`}
            >
              <div className="min-w-[calc(60px-((4px+6px)*2))] flex justify-center">
                <FaMoneyBillTransfer />
              </div>
              <span>Loan Transactions</span>
            </div>
          </li>
        </ul>
        <ul className="w-full mt-12 ml-[6px]">
          <li className="h-12 bg-transparent ml-[6px] p-1 relative">
            <div
              className={`cursor-pointer w-full h-full flex items-center text-base text-tred whitespace-nowrap overflow-x-hidden ${
                showSideBar &&
                'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
              }`}
            >
              <div className="min-w-[calc(60px-((4px+6px)*2))] flex justify-center">
                <BiLogOutCircle />
              </div>
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </section>
      {/* SIDEBAR END */}

      {/* CONTENT */}
      <section
        className={`relative w-[calc(100%-((56px-8px)+((4px+6px)*2)))] left-[280px] transition duration-300 ease-in-out ${
          showSideBar && 'w-[calc(100%-60px)] left-[60px]'
        }`}
      >
        {/* NAVBAR */}
        <nav className="h-14 bg-tlight py-0 px-6 flex items-center gap-6 font-lato sticky top-0 left-0 z-[2000] before:absolute before:w-10 before:h-10 before:-bottom-10 before:left-0 before:rounded-[50%] before:shadow-[-20px_-20px_0_0_tlight]">
          <div onClick={() => setShowSideBar((prevState) => !prevState)} className="cursor-pointer text-tdark">
            <IoMenuSharp />
          </div>
        </nav>
      </section>
    </>
  );
};

export default Dashboard;
