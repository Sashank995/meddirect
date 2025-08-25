// // src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_cel3mjn", // Replace with your EmailJS service ID
        "template_xutxe7v", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "HC_XRPuc8jrSlduOL" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email send error:", error);
          setStatus("Failed to send message ❌");
        }
      );
  };

  const contactDetails = [
    {
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      title: "Email",
      value: "support@meddirect.com",
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-500" />,
      title: "Location",
      value: "Parul University, Gujarat, India",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6 md:p-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Have questions or need help? We're here for you.
        </p>
      </motion.div>

      {/* Contact Info */}
      <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contactDetails.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white border rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-12 max-w-4xl mx-auto bg-white border rounded-xl shadow-lg p-6 md:p-8"
      >
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
          {status && (
            <p
              className={`mt-2 text-sm ${
                status.includes("✅")
                  ? "text-green-600"
                  : status.includes("❌")
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </motion.div>

      {/* Map Embed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="mt-12 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border"
      >
        <iframe
          title="Parul University Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.235074717675!2d73.09746967528787!3d22.294691679683898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9310c7f1b01%3A0x4d2a9a53e82a3e4a!2sParul%20University!5e0!3m2!1sen!2sin!4v1692195089564!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
}
