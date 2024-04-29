"use client"
import { useEffect, useState } from 'react';
import '@/public/styles/hero.css';

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
            <div className="animate-text">
              {texts.map((text, item) => (
                <span key={item} className={item === index ? 'text-in' : 'text-out'}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAnimation;
