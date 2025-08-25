import React from "react";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">MedDirect</h3>
            <p className="mt-2 text-gray-400">
              Empowering you to make informed health decisions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>Health Advice</li>
              <li>Medication Finder</li>
              <li>Hospital Locator</li>
              <li>Emergency Services</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li>Help Center</li>
              <li>Medical Disclaimer</li>
              <li>Terms of Service</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © 2024 MedDirect. All rights reserved.
        </div>
      </footer>
    );
  }
  