import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/DATA';


const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-amber-50 px-4 py-1 rounded-full">
          <p className="text-base text-amber-600 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-content bg-white"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-amber-600 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%">
          We connect people (who want food) to cool restaurants (who make food)
          to awesome couriers (who bring people food). We have local teams
          dedicated to finding the best food in your city—whether that's
          spaghetti carbonara or a really good burger—so you can get the coolest
          restaurants brought right to you.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-amber-400 to-amber-500 w-full md:w-auto p-4 px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">

        <img
        className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          src={HeroBg}
          alt="hero-background"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">

          {heroData && heroData.map(n => 
          (<div key={n.id} className=" lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
          <img src={n.imageSrc} alt="icecream" className="w-20 lg:w-40 -mt-10 lg:-mt-20"/>
          <p className="text-base lg:text-xl text-base font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
          <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">{n.description}</p>
          <p class    =" text-sm font-semibold text-headingColor"><span className="text-xs text-red-600">$</span>{n.price}</p>
        </div>)
          )}
          
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
