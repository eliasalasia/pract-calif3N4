import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImageHome from '../assets/home/backgroundhome.jpg';

function HomeContent() {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageHome);

  useEffect(() => {
    
    switch (location.pathname) {
      case '/home':
        setBackgroundImage(backgroundImageHome);
        break;
    
      default:
        setBackgroundImage(backgroundImageHome);
    }
  }, [location.pathname]);

  return (
    <div
      className="relative flex justify-between items-center text-white h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="p-4 max-w-2xl m-80">
        <h3 className="text-3xl mb-4">SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className="text-8xl font-bold mb-4">SPACE</h1>
        <p className="text-lg mb-6">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className="text-center">
        <button className="bg-white text-black px-8 py-16 rounded-full text-2xl font-bold m-72">EXPLORE</button>
      </div>
    </div>
  );
}

export default HomeContent;