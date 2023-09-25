import React from 'react';

const About = () => {
  return (
    <section
      id="who-we-are"
      className="bg-secondary sectionSize flex-col md:flex-row border-b-4"
    >
      <div className="md:flex-1 md:mr-10">
        <div className="relative">
          <img src="images/aboutus.svg" alt="About" />
        </div>
      </div>
      <div className="flex flex-col justify-around md:block flex-1">
        <div>
          <h2 class="inSectionTitle pt-4 md:pt-0">Who We Are</h2>
        </div>
        <p className="font-serif font-normal">
          Fusce sed ultricies mi, eget feugiat neque. In consequat eleifend
          pellentesque. Nunc viverra in enim sit amet laoreet. Suspendisse
          semper facilisis dui quis ultrices. Fusce rhoncus at nisi eu cursus.
          Phasellus dignissim egestas eleifend. In sed orci risus. Nulla
          facilisi. Nullam hendrerit congue urna id viverra. Mauris placerat
          finibus sem nec luctus.
        </p>
      </div>
    </section>
  );
};

export default About;
