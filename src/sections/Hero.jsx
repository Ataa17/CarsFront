import React from 'react';
import cars from '../assets/cars.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=" w-full">
      <div
        className="hero min-h-screen object-contain"
        style={{
          backgroundImage: `url(${cars})`, 
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Looking for a car ?</h1>
            <p className="mb-5">
              Cars provide you with a vast collection of cars from different brands and models.
              Rent a car from Cars and get the best deals on your car rental.
            </p>
            <button className="btn ">
                <Link to="/auth">
                Get Started

                </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
