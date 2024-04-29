import React, { useEffect, useState } from 'react';
import '@/';

const TextAnimation = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    'Wear Face Mask',
    'Cover Face When Coughing',
    'Wash Your Hand Frequently',
    'Stay At Home',
    'Avoid Close Contact'
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
            <h1>How can I protect myself from Covid-19?</h1>
            <p className="animate-text">
              {texts.map((text, idx) => (
                <span key={idx} className={idx === index ? 'text-in' : 'text-out'}>
                  {text}
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
