import React from "react";

export default function HeroSection() {
    return (
      <section className="bg-blue-600 text-white px-6 py-16 md:flex md:items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome to MedDirect</h1>
          <p>Your one-stop healthcare guide at your fingertips.</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded shadow">Get Started</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Healthcare illustration"
            className="rounded shadow"
          />
        </div>
      </section>
    );
  }
  