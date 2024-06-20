import React from 'react';
import backgroundImageTechnology from '../assets/technology/bgtechnology.jpg';
import imageLaunch from '../assets/technology/image-launch.jpg'

function TechnologyContent() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white h-screen"
      style={{
        backgroundImage: `url(${backgroundImageTechnology})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <main className="flex p-8 w-full">
        <div className="flex w-2/3">
          <div className="flex flex-col space-y-10 mr-8 pt-40">
            <button className="w-16 h-16 rounded-full bg-white text-black text-2xl font-bold">1</button>
            <button className="w-16 h-16 rounded-full border-2 border-gray-600 text-white text-2xl font-bold">2</button>
            <button className="w-16 h-16 rounded-full border-2 border-gray-600 text-white text-2xl font-bold">3</button>
          </div>
          <section className="flex flex-col justify-center items-start">
            <h3 className="text-gray-400 mb-4 tracking-widest text-sm">THE TERMINOLOGY...</h3>
            <h1 className="text-5xl mb-6 font-light">LAUNCH VEHICLE</h1>
            <p className="text-gray-400 text-left max-w-xl">
              A launch vehicle or carrier rocket is a rocket-propelled
              vehicle used to carry a payload from Earth's surface to
              space, usually to Earth orbit or beyond. Our WEB-X
              carrier rocket is the most powerful in operation.
              Standing 150 metres tall, it's quite an awe-inspiring sight
              on the launch pad!
            </p>
          </section>
        </div>
        <section className="w-1/3">
          <img
            src={imageLaunch}
            alt="Rocket launch"
            className="w-full h-full object-cover"
          />
        </section>
      </main>
    </div>
  );
}

export default TechnologyContent;