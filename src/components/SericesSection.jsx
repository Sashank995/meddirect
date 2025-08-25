import React from "react";


export default function ServicesSection() {
  const services = [
    { title: "Health Assessment", desc: "AI-based quick health checks." },
    { title: "Medication Guide", desc: "Find detailed medicine info." },
    { title: "Hospital Finder", desc: "Locate hospitals nearby." },
  ];

  return (
    <section className="px-6 py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded shadow text-center">
            <h3 className="font-semibold text-lg">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
