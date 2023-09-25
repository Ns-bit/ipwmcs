import React from 'react';

const Hero = (props) => {
  return (
    <section
      id="home"
      className="pt-24 md:pt-0 lg:pt-16 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary"
    >
      <div className="md:flex-1 md:mr-10">
        <h1 className="font-serif text-5xl font-bold mb-7 leading-[1.1]">
          Ibom Power Workers Multipurpose Cooperative Society
        </h1>
        <p className="font-serif font-normal mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum
          tempore consectetur voluptas, cumque nobis laboriosam voluptatem.
        </p>
        <div className="font-mono">
          <button
            onClick={() => props.handleLinkClick('membership')}
            className="bg-black px-6 py-4 rounded-lg border-2 border-black border-solid text-white mr-2 mb-2"
          >
            Get started
          </button>
        </div>
      </div>
      <div className="flex justify-around md:block my-8 md:mt-0 md:flex-1">
        <div className="relative">
          <img
            src="images/cooperative_society.svg"
            alt="Hero Pics"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
