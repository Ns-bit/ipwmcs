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
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState(0);
  const [showSideBar, setShowSideBar] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setChecked((prevState) => !prevState);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
              className={`cursor-pointer  h-full bg-tlight flex items-center rounded-[48px] text-[16px] whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 0 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar
                  ? 'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
                  : 'w-full'
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
              className={`cursor-pointer h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 1 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar
                  ? 'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
                  : 'w-full'
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
              className={`cursor-pointer h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 2 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar
                  ? 'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
                  : 'w-full'
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
              className={`cursor-pointer h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 3 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar
                  ? 'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
                  : 'w-full'
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
              className={`cursor-pointer h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 4 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar
                  ? 'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
                  : 'w-full'
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
              className={`cursor-pointer h-full bg-tlight flex items-center rounded-[48px] text-[16px]  whitespace-nowrap overflow-x-hidden hover:text-tblue ${
                active === 5 ? 'text-tblue' : 'text-tdark'
              } ${
                showSideBar
                  ? 'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
                  : 'w-full'
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
              className={`cursor-pointer h-full flex items-center text-base text-tred whitespace-nowrap overflow-x-hidden ${
                showSideBar
                  ? 'w-[calc(48px-(4px*2))] transition-[width] duration-300 ease-in-out'
                  : 'w-full'
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
        className={`relative w-[calc(100%-280px)] left-[280px] transition duration-300 ease-in-out ${
          showSideBar && 'w-[calc(100%-60px)] left-[60px]'
        }`}
      >
        {/* NAVBAR */}
        <nav className="h-14 bg-tlight py-0 px-6 flex justify-around items-center gap-6 font-lato sticky top-0 left-0 z-[2000] before:absolute before:w-10 before:h-10 before:-bottom-10 before:left-0 before:rounded-[50%] before:shadow-[-20px_-20px_0_0_tlight]">
          <div
            onClick={() => setShowSideBar((prevState) => !prevState)}
            className="cursor-pointer text-tdark"
          >
            <IoMenuSharp />
          </div>
          <span className="text-base transition duration-300 cursor-default ease-in-out text-tdark hover:text-tblue">
            Welcome Mr. John Doe
          </span>
          <input id="toggler" type="checkbox" hidden />
          <label
            onClick={handleThemeSwitch}
            htmlFor="toggler"
            className={`block min-w-[50px] h-[25px] rounded-[25px] bg-tgrey cursor-pointer relative before:absolute before:top-[2px] before:left-[2px] before:bottom-[2px] before:w-[calc(25px-4px)] before:bg-tred before:rounded-[50%] before:transition-all before:duration-300 before:ease-in-out ${
              checked && 'before:left-[calc(100%-(25px-4px)-2px)]'
            }`}
          />
          <div className="text-[20px] cursor-pointer relative text-tdark">
            <div className="text-tdark">
              <IoMdNotifications />
            </div>
            <span className="absolute -top-[6px] -right-[6px] w-5 h-5 rounded-[50%] border-2 border-solid border-tlight bg-tred text-tlight font-bold text-[12px] flex justify-center items-center">
              99
            </span>
          </div>
          <div className="cursor-pointer">
            <img
              src="images/people.png"
              alt="Profile pics"
              className="w-9 h-9 object-cover rounded-[50%]"
            />
          </div>
        </nav>
        {/* NAVBAR END */}
        <main className="w-full py-9 px-6 font-poppins max-h-[calc(100vh-56px)] overflow-y-auto bg-tgrey">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-4xl font-semibold mb-[10px] text-tdark">
              <h1 className="">Dashboard</h1>
            </div>
            <a
              href="@"
              className="h-9 py-0 px-4 rounded-[36px] bg-tblue text-tlight flex justify-center items-center gap-[10px] font-medium"
            >
              <div className="cursor-pointer text-tlight">
                <FaCloudDownloadAlt />
              </div>
              <span>Download your Details</span>
            </a>
          </div>
          <ul className="grid grid-cols-3 gap-6 mt-9">
            <li className="p-6 bg-tlight rounded-[20px] flex items-center gap-6">
              <div className="w-20 h-20 rounded-[10px] text-[36px] flex justify-center items-center bg-tlightblue text-tblue">
                <FcCurrencyExchange />
              </div>
              <span>
                <h3 className="text-[24px] font-semibold text-tdark">60,000</h3>
                <p className="text-tdark">Shares value</p>
              </span>
            </li>
            <li className="p-6 bg-tlight rounded-[20px] flex items-center gap-6">
              <div className="w-20 h-20 rounded-[10px] text-[36px] flex justify-center items-center bg-tlightyellow text-tyellow">
                <FcCurrencyExchange />
              </div>
              <span>
                <h3 className="text-[24px] font-semibold text-tdark">60,000</h3>
                <p className="text-tdark">Shares value</p>
              </span>
            </li>
            <li className="p-6 bg-tlight rounded-[20px] flex items-center gap-6">
              <div className="w-20 h-20 rounded-[10px] text-[36px] flex justify-center items-center bg-tlightorange text-torange">
                <FcCurrencyExchange />
              </div>
              <span>
                <h3 className="text-[24px] font-semibold text-tdark">60,000</h3>
                <p className="text-tdark">Shares value</p>
              </span>
            </li>
          </ul>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
