import React, { useState } from 'react';
import faqs from '../pages/faq-content';

const FAQs = () => {
  const [shownIndex, setShownIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setShownIndex(shownIndex === index ? null : index);
  };

  return (
    <section id='faq' className="faqSection flex-col bg-black text-white">
      <div>
        <h2 className="faqSecondaryTitle mb-0">FAQ</h2>
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          onClick={() => handleQuestionClick(index)}
          className="w-full py-4"
        >
          <div className="flex justify-between items-center">
            <div className="mr-auto font-medium">{faq.question}</div>
            <img
              src="images/CaretRight.svg"
              alt=""
              className={`transform transition-transform ${
                shownIndex === index ? 'rotate-90' : null
              }`}
            />
          </div>
          {shownIndex === index && (
            <div className="text-sm font-extralight pb-8">{faq.answer}</div>
          )}
          <hr className="w-full mt-2 bg-white" />
        </div>
      ))}
    </section>
  );
};

export default FAQs;
