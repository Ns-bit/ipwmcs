import React from 'react';

const Services = () => {
  return (
    <section id='services' className="sectionSize flex-col border-b-4 bg-secondary">
      <div>
        <h2 className="secondaryTitle">Services</h2>
      </div>
      <div className="md:grid md:grid-cols-2 md:grid-rows-2">
        <div className="flex items-start font-montserrat my-6 mr-10">
          <img src="images/service_check.svg" alt="service" className="h-7 mr-4" />
          <div>
            <h3 className="font-semibold text-2xl">Service #1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              voluptate praesentium tenetur earum repellendus! Dicta culpa
              consequuntur saepe quibusdam labore, est ex ducimus tempore, quos
              illum officiis, pariatur ea placeat.
            </p>
          </div>
        </div>
        <div className="flex items-start font-montserrat my-6 mr-10">
          <img src="images/service_check.svg" alt="" className="h-7 mr-4" />
          <div>
            <h3 className="font-semibold text-2xl">Service #2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              voluptate praesentium tenetur earum repellendus! Dicta culpa
              consequuntur saepe quibusdam labore, est ex ducimus tempore, quos
              illum officiis, pariatur ea placeat.
            </p>
          </div>
        </div>

        <div className="flex items-start font-montserrat my-6 mr-10">
          <img src="images/service_check.svg" alt="Service" className="h-7 mr-4" />
          <div>
            <h3 className="font-semibold text-2xl">Service #3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              voluptate praesentium tenetur earum repellendus! Dicta culpa
              consequuntur saepe quibusdam labore, est ex ducimus tempore, quos
              illum officiis, pariatur ea placeat.
            </p>
          </div>
        </div>

        <div className="flex items-start font-montserrat my-6 mr-10">
          <img src="images/service_check.svg" alt="" className="h-7 mr-4" />
          <div>
            <h3 className="font-semibold text-2xl">Service #4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              voluptate praesentium tenetur earum repellendus! Dicta culpa
              consequuntur saepe quibusdam labore, est ex ducimus tempore, quos
              illum officiis, pariatur ea placeat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
