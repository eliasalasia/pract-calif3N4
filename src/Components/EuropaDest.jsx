import React from 'react';
import backgroundImageDestination from '../assets/destination/bgdestination.jpg';
import imageEuropa from '../assets/destination/image-europa.png';
import DestinationLinks from './DestinationLinks';

function EuropaDest() {
  return (
    <div className="relative flex flex-col justify-center items-center text-white h-screen"
      style={{
        backgroundImage: `url(${backgroundImageDestination})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        <h2 className="text-2xl uppercase tracking-widest mb-12"><span className="font-bold mr-4">01</span>Pick your destination</h2>
        <main className="flex justify-between items-start">
          <section className="w-2/5">
            <img src={imageEuropa} alt="Planet" className="w-full h-auto" />
          </section>
          <section className="w-1/2">
            <div className="flex justify-start mb-8">
              <DestinationLinks />
            </div>
            <article>
              <h2 className="text-8xl font-serif mb-4">EUROPA</h2>
              <p className="text-lg text-gray-300 mb-12">
                The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
              </p>
              <div className="border-t border-gray-600 pt-8">
                <div className="flex justify-start space-x-16">
                  <div>
                    <h3 className="text-sm font-light uppercase mb-2">Avg. distance</h3>
                    <p className="text-3xl">628 MIL. KM</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-light uppercase mb-2">Est. travel time</h3>
                    <p className="text-3xl">3 YEARS</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default EuropaDest;