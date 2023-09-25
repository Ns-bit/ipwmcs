import React, { useState } from 'react';

const Membership = ({ isSelected, toggleFormVisibility }) => {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <section
      id="membership"
      className="sectionSize bg-secondary flex-col md:flex-row"
    >
      <div className="md:flex-1 md:mr-10">
        <div>
          <h2 className="secondaryTitle">Membership</h2>
        </div>
        <p className="font-serif font-normal">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Ut malesuada massa eget mauris euismod, sit
          amet pharetra enim varius. Vivamus nec sem posuere, blandit tortor eu,
          faucibus nulla. Quisque mollis arcu ante, in vulputate urna iaculis
          at. Sed iaculis nisi id ligula feugiat.
        </p>
      </div>
      <div className="flex flex-col justify-around md:block flex-1 pt-6 md:pt-0">
        <div className="overflow-hidden max-w-[390px] bg-[#fff] p-[30px] rounded-[15px] shadow-[0_0px_15px_20px_rgba(0,0,0,0.1)]">
          <div className="flex w-[200%]">
            <div
              className={`w-1/2 text-4xl font-semibold text-center transition-all duration-500 ease-in-out ${
                isSelected ? 'ml-[-50%]' : 'ml-[0%]'
              }`}
            >
              {forgotPassword ? 'Reset Password' : 'Login'}
            </div>
            <div className="w-1/2 text-4xl font-semibold text-center transition-all duration-500 ease-in-out">
              Signup
            </div>
          </div>
          <div className="w-full overflow-hidden">
            {/* Login and Signup Heading */}
            <div className="flex relative h-[50px] w-full overflow-hidden mx-0 mt-[30px] mb-[10px] justify-between border border-gray-200 rounded-xl">
              <input
                onClick={() => toggleFormVisibility(false)}
                type="radio"
                name="slide"
                id="login"
                defaultChecked
                className="hidden"
              />
              <input
                onClick={() => toggleFormVisibility(true)}
                type="radio"
                name="slide"
                id="signup"
                className="hidden"
              />
              <label
                htmlFor="login"
                className={`h-full w-full bg-[#fff] text-lg font-medium text-center leading-[48px] cursor-pointer z-[1] ${
                  isSelected
                    ? null
                    : 'w-1/2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-[15px] transition-all ease-in-out text-[#fff]'
                }`}
              >
                {forgotPassword ? 'Reset Password' : 'Login'}
              </label>
              <label
                htmlFor="signup"
                className={`h-full w-full bg-[#fff] text-lg font-medium text-center leading-[48px] cursor-pointer z-[1] ${
                  isSelected
                    ? 'w-1/2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-[15px] transition-all ease-in-out text-[#fff]'
                    : null
                }`}
              >
                Signup
              </label>
            </div>
            <div className="flex w-[200%]">
              {/* Login and forgot password forms */}
              {forgotPassword ? (
                <form
                  action="#"
                  className={`w-1/2 transition-all duration-500 ease-in-out my-auto ${
                    isSelected ? 'ml-[-50%]' : 'ml-[0%]'
                  }`}
                >
                  <div className="h-[50px] w-full ">
                    <input
                      className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="h-[50px] w-full mt-10 rounded-[15px] relative overflow-hidden">
                    <div className="h-full w-[300%] bg-gradient-to-r from-blue-700 via-blue-800 to-blue-500 absolute left-[-100%] hover:left-0 rounded-[15px] transition-all ease-in-out duration-[400ms]"></div>
                    <input
                      className="w-full h-full z-[1] relative bg-none border-none text-[#fff] pl-0 rounded-[15px] text-xl font-medium cursor-pointer"
                      type="submit"
                      value="Send Reset Email"
                    />
                  </div>
                  <div className="text-center mt-[30px]">
                    Not a member?{' '}
                    <span
                      onClick={() => toggleFormVisibility(true)}
                      className="text-red-500 no-underline cursor-pointer hover:underline"
                    >
                      Signup now
                    </span>
                  </div>
                  <div className="text-center mt-[10px]">
                    <span
                      onClick={() =>
                        setForgotPassword((prevState) => !prevState)
                      }
                      className="text-[#1a75ff] no-underline cursor-pointer hover:underline"
                    >
                      Log in instead
                    </span>
                  </div>
                </form>
              ) : (
                <form
                  action="#"
                  className={`w-1/2 transition-all duration-500 ease-in-out my-auto ${
                    isSelected ? 'ml-[-50%]' : 'ml-[0%]'
                  }`}
                >
                  <div className="h-[50px] w-full mt-5">
                    <input
                      className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="h-[50px] w-full mt-5">
                    <input
                      className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mt-[10px] ">
                    <span
                      onClick={() =>
                        setForgotPassword((prevState) => !prevState)
                      }
                      className="text-red-500 no-underline cursor-pointer hover:underline"
                    >
                      Forgot password?
                    </span>
                  </div>
                  <div className="h-[50px] w-full mt-5 rounded-[15px] relative overflow-hidden">
                    <div className="h-full w-[300%] bg-gradient-to-r from-blue-700 via-blue-800 to-blue-500 absolute left-[-100%] hover:left-0 rounded-[15px] transition-all ease-in-out duration-[400ms]"></div>
                    <input
                      className="w-full h-full z-[1] relative bg-none border-none text-[#fff] pl-0 rounded-[15px] text-xl font-medium cursor-pointer"
                      type="submit"
                      value="Log me in"
                    />
                  </div>
                  <div className="text-center mt-[30px]">
                    Not a member?{' '}
                    <span
                      onClick={() => toggleFormVisibility(true)}
                      className="text-red-500 no-underline cursor-pointer hover:underline"
                    >
                      Signup now
                    </span>
                  </div>
                </form>
              )}

              {/* Signup form */}
              <form
                action="#"
                className="w-1/2 transition-all duration-500 ease-in-out"
              >
                <div class="h-[50px] w-full mt-5">
                  <input
                    className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                    type="text"
                    placeholder="First Name"
                    autoCapitalize="words"
                    required
                  />
                </div>
                <div class="h-[50px] w-full mt-5">
                  <input
                    className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div class="h-[50px] w-full mt-5">
                  <input
                    className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="h-[50px] w-full mt-5">
                  <input
                    className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="h-[50px] w-full mt-5">
                  <input
                    className="h-full w-full outline-none pl-[15px] rounded-[15px] border border-gray-300 border-b-2 text-[17px] focus:border-[#1a75ff] placeholder:text-[#999] placeholder:transition-all placeholder:duration-300 placeholder:ease-in-out focus:placeholder:text-[#1a75ff] transition-all ease-in-out duration-500"
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div className="h-[50px] w-full mt-5 rounded-[15px] relative overflow-hidden">
                  <div className="h-full w-[300%] bg-gradient-to-r from-blue-700 via-blue-800 to-blue-500 absolute left-[-100%] hover:left-0 rounded-[15px] transition-all ease-in-out duration-[400ms]"></div>
                  <input
                    className="w-full h-full z-[1] relative bg-none border-none text-[#fff] pl-0 rounded-[15px] text-xl font-medium cursor-pointer"
                    type="submit"
                    value="Sign me up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
