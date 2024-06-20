import React from 'react';
import { Link } from 'react-router-dom';

const DestinationLinks = () => {
  return (
    <div className="flex justify-center space-x-8 mb-4">
      <Link to="/destination/moon" className="pb-5 text-lg font-semibold border-b-2 border-transparent hover:border-white">MOON</Link>
      <Link to="/destination/mars" className="pb-5 text-lg font-semibold border-b-2 border-transparent hover:border-white">MARS</Link>
      <Link to="/destination/europa" className="pb-5 text-lg font-semibold border-b-2 border-transparent hover:border-white">EUROPA</Link>
      <Link to="/destination/titan" className="pb-5 text-lg font-semibold border-b-2 border-transparent hover:border-white">TITAN</Link>
    </div>
  );
};

export default DestinationLinks;