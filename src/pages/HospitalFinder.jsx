import { useState, useEffect } from "react";
import { MapPin, Search, Phone, Star } from "lucide-react";

export default function HospitalFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch hospitals from backend
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch("https://medirectbackend.onrender.com/api/hospitals");
        const data = await response.json();
        setHospitals(data);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Hospital Finder
      </h1>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-lg shadow p-2 mb-6">
        <Search className="text-gray-400 w-5 h-5 ml-2" />
        <input
          type="text"
          placeholder="Search hospitals..."
          className="flex-1 p-2 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-500">Loading hospitals...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 cursor-pointer"
                onClick={() => setSelectedHospital(hospital)}
              >
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-bold">{hospital.name}</h2>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4" />
                    <span className="ml-1">{hospital.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hospital.address}
                </p>
                <p className="text-sm text-gray-600 mt-1">{hospital.distance}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hospitals found.</p>
          )}
        </div>
      )}

      {/* Hospital Detail Drawer */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
          <div className="bg-white w-full md:w-1/3 h-full p-6 overflow-y-auto shadow-lg">
            <button
              className="text-red-500 font-bold mb-4"
              onClick={() => setSelectedHospital(null)}
            >
              Close ✖
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedHospital.name}</h2>
            <p className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-5 h-5 mr-2" />
              {selectedHospital.address}
            </p>
            <p className="flex items-center text-gray-600 mb-4">
              <Phone className="w-5 h-5 mr-2" />
              {selectedHospital.phone}
            </p>
            <div className="bg-green-100 text-green-800 rounded-lg p-3 font-medium">
              Distance: {selectedHospital.distance}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
