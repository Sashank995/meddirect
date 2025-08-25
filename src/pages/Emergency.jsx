// src/pages/Emergency.jsx
import React, { useState, useEffect } from "react";
import { Phone, MapPin, AlertTriangle, User, Heart } from "lucide-react";

export default function Emergency() {
  const [locationLink, setLocationLink] = useState("");
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [medicalId, setMedicalId] = useState(null);

  // ✅ Fetch emergency contacts from backend
  useEffect(() => {
    fetch("https://medirectbackend.onrender.com/api/emergency/contacts")
      .then((res) => res.json())
      .then((data) => setEmergencyContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));

    // ✅ Fetch medical ID from backend
    fetch("https://medirectbackend.onrender.com/api/emergency/medical-id")
      .then((res) => res.json())
      .then((data) => setMedicalId(data))
      .catch((err) => console.error("Error fetching medical ID:", err));
  }, []);

  // ✅ Get current location and send to backend
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        setLocationLink(mapsUrl);

        // Send location to backend
        fetch("https://medirectbackend.onrender.com/api/emergency/location", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ latitude: lat, longitude: lng, link: mapsUrl }),
        }).catch((err) => console.error("Error sending location:", err));

        window.open(mapsUrl, "_blank");
      });
    } else {
      alert("Geolocation not supported on this browser.");
    }
  };

  // ✅ Panic button API call
  const triggerPanic = () => {
    fetch("https://medirectbackend.onrender.com/api/emergency/panic", { method: "POST" })
      .then(() => alert("🚨 Panic alert sent to your emergency contacts!"))
      .catch((err) => console.error("Error triggering panic:", err));
  };

  return (
    <div className="min-h-screen bg-red-50 p-6">
      <h1 className="text-3xl font-bold text-red-700 mb-4 flex items-center gap-2">
        <AlertTriangle /> Emergency Help
      </h1>

      {/* Emergency Contacts */}
      <div className="grid md:grid-cols-3 gap-4">
        {emergencyContacts.length > 0 ? (
          emergencyContacts.map((contact, idx) => (
            <a
              key={idx}
              href={`tel:${contact.number}`}
              className="flex items-center gap-3 bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition"
            >
              {contact.name === "Ambulance" ? (
                <Heart className="text-red-500" />
              ) : (
                <AlertTriangle className="text-blue-500" />
              )}
              <div>
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.number}</p>
              </div>
              <Phone className="ml-auto text-green-500" />
            </a>
          ))
        ) : (
          <p className="text-gray-500">Loading emergency contacts...</p>
        )}
      </div>

      {/* Share Location */}
      <div className="mt-6 p-4 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MapPin /> Share Location
        </h2>
        <p className="text-gray-600 mt-1">
          Share your real-time location with emergency responders or family.
        </p>
        <button
          onClick={getLocation}
          className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Get My Location
        </button>
        {locationLink && (
          <p className="mt-2 text-sm text-blue-600 break-words">
            Location:{" "}
            <a href={locationLink} target="_blank" rel="noreferrer">
              {locationLink}
            </a>
          </p>
        )}
      </div>

      {/* Medical ID */}
      <div className="mt-6 p-4 bg-white border rounded-xl shadow-md hover:shadow-lg transition">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <User /> My Medical ID
        </h2>
        {medicalId ? (
          <ul className="mt-2 text-gray-700 space-y-1">
            <li>
              <strong>Name:</strong> {medicalId.name}
            </li>
            <li>
              <strong>Blood Group:</strong> {medicalId.bloodGroup}
            </li>
            <li>
              <strong>Allergies:</strong> {medicalId.allergies}
            </li>
            <li>
              <strong>Chronic Conditions:</strong> {medicalId.conditions}
            </li>
          </ul>
        ) : (
          <p className="text-gray-500">Loading medical ID...</p>
        )}
      </div>

      {/* Panic Button */}
      <div className="mt-6">
        <button
          onClick={triggerPanic}
          className="w-full py-3 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg"
        >
          🚨 PANIC BUTTON
        </button>
      </div>
    </div>
  );
}
