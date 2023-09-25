import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center px-4 pb-2 md:px-48 bg-black">
      <div className="flex flex-col mb-8 text-white">
        <div className="flex flex-row justify-start items-center">
          <img src="images/location.svg" alt="" />
          <p className="pl-4">
            No.1 Ibom Power Avenue, Off Ibekwe Road Ikot Abasi, Akwa Ibom State.
          </p>
        </div>
        <div className="flex flex-row justify-start items-center pt-6">
          <img src="images/phone.svg" alt="" />
          <p className="pl-4">080XXXXXX</p>
        </div>
      </div>
      <div className="text-white text-sm pt-12 pb-4">
        <p>&copy; {currentYear} IPWMCS - All Rights Reserved.</p>
        <p>Designed and Developed by SyncNovate.</p>
      </div>
    </footer>
  );
};

export default Footer;
