import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Membership from '../components/Membership';
import Services from '../components/Services';
import About from '../components/About';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';

const Home = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleFormVisibility = (isSelected) => {
    setIsSelected(isSelected);
  };

  const handleLinkClick = (targetId) => {
    if (targetId === 'login' || targetId === 'signup') {
      const membershipElement = document.getElementById('membership');
      if (membershipElement) {
        window.scrollTo({
          top: membershipElement.offsetTop - 70,
          behavior: 'smooth'
        });

        // Update the URL with the component's name
        const componentName = targetId.replace('-', ' '); // Convert kebab case to words
        window.history.pushState(null, '', `/${componentName}`);

        toggleFormVisibility(targetId === 'signup');
      }
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });

        // Update the URL with the component's name
        const componentName = targetId.replace('-', ' '); // Convert kebab case to words
        window.history.pushState(null, '', `/${componentName}`);
      }
    }
  };

  return (
    <>
      <NavigationBar handleLinkClick={handleLinkClick} />
      <Hero handleLinkClick={handleLinkClick} />
      <HowItWorks />
      <Services />
      <About />
      <Membership
        isSelected={isSelected}
        toggleFormVisibility={toggleFormVisibility}
      />
      <FAQs />
      <Footer />
    </>
  );
};

export default Home;
