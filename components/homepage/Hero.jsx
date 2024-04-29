"use client"
import React, { useEffect, useState } from 'react';
import '@/public/styles';

const TextAnimation = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    { header: 'Wear Face Mask', description: 'Always wear a face mask when in public places.', style: 'mask' },
    { header: 'Cover Face When Coughing', description: 'Cover your face with your elbow when coughing to prevent the spread of droplets.', style: 'cover' },
    { header: 'Wash Your Hand Frequently', description: 'Wash your hands with soap and water frequently for at least 20 seconds.', style: 'wash' },
    { header: 'Stay At Home', description: 'Stay at home as much as possible to reduce the risk of exposure to the virus.', style: 'stay' },
    { header: 'Avoid Close Contact', description: 'Avoid close contact with people who are sick or showing symptoms of illness.', style: 'avoid' }
  ];

  const textInTimer = 3000;
  const textOutTimer = 2800;

  useEffect(() => {
    const animateText = () => {
      const animateInterval = setInterval(() => {
        setIndex(prevIndex => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
      }, textInTimer + textOutTimer);

      return () => clearInterval(animateInterval);
    };

    animateText();
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="home-text">
            <h1>{texts[index].header}</h1>
            <p className="animate-text">
              {texts.map((text, idx) => (
                <span
                  key={idx}
                  className={idx === index ? 'active ' + text.style : text.style}
                >
                  {text.description}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
