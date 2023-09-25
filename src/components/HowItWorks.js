import React from 'react';

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-black text-white sectionSize flex-col"
    >
      <div>
        <h2 className="secondaryTitle">How it works</h2>
      </div>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex-1 mx-8 flex flex-col items-center my-4">
          <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
            1
          </div>
          <h3 className="font-medium text-xl mb-2">Heading for No.1</h3>
          <p className="text-center font-sans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex-1 mx-8 flex flex-col items-center my-4">
          <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
            2
          </div>
          <h3 className="font-medium text-xl mb-2">Heading for No.2</h3>
          <p className="text-center font-sans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex-1 mx-8 flex flex-col items-center my-4">
          <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
            3
          </div>
          <h3 className="font-montserrat font-medium text-xl mb-2">
            Heading for No.3
          </h3>
          <p className="text-center font-montserrat">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
