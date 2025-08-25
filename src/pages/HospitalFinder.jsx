// import { useState, useEffect } from "react";
// import { MapPin, Search, Phone, Star } from "lucide-react";

// export default function HospitalFinder() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedHospital, setSelectedHospital] = useState(null);
//   const [hospitals, setHospitals] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch hospitals from backend
//   useEffect(() => {
//     const fetchHospitals = async () => {
//       try {
//         const response = await fetch("https://medirectbackend.onrender.com/api/hospitals");
//         const data = await response.json();
//         setHospitals(data);
//       } catch (error) {
//         console.error("Error fetching hospitals:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHospitals();
//   }, []);

//   const filteredHospitals = hospitals.filter((hospital) =>
//     hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-green-700 mb-4">
//         Hospital Finder
//       </h1>

//       {/* Search Bar */}
//       <div className="flex items-center bg-white rounded-lg shadow p-2 mb-6">
//         <Search className="text-gray-400 w-5 h-5 ml-2" />
//         <input
//           type="text"
//           placeholder="Search hospitals..."
//           className="flex-1 p-2 outline-none"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Loading State */}
//       {loading ? (
//         <p className="text-gray-500">Loading hospitals...</p>
//       ) : (
//         <div className="grid md:grid-cols-2 gap-4">
//           {filteredHospitals.length > 0 ? (
//             filteredHospitals.map((hospital) => (
//               <div
//                 key={hospital.id}
//                 className="bg-white rounded-xl border shadow-sm hover:shadow-md transition p-4 cursor-pointer"
//                 onClick={() => setSelectedHospital(hospital)}
//               >
//                 <div className="flex items-start justify-between">
//                   <h2 className="text-lg font-bold">{hospital.name}</h2>
//                   <div className="flex items-center text-yellow-500">
//                     <Star className="w-4 h-4" />
//                     <span className="ml-1">{hospital.rating}</span>
//                   </div>
//                 </div>
//                 <p className="text-gray-500 flex items-center mt-1">
//                   <MapPin className="w-4 h-4 mr-1" />
//                   {hospital.address}
//                 </p>
//                 <p className="text-sm text-gray-600 mt-1">{hospital.distance}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No hospitals found.</p>
//           )}
//         </div>
//       )}

//       {/* Hospital Detail Drawer */}
//       {selectedHospital && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
//           <div className="bg-white w-full md:w-1/3 h-full p-6 overflow-y-auto shadow-lg">
//             <button
//               className="text-red-500 font-bold mb-4"
//               onClick={() => setSelectedHospital(null)}
//             >
//               Close ✖
//             </button>
//             <h2 className="text-2xl font-bold mb-2">{selectedHospital.name}</h2>
//             <p className="flex items-center text-gray-600 mb-2">
//               <MapPin className="w-5 h-5 mr-2" />
//               {selectedHospital.address}
//             </p>
//             <p className="flex items-center text-gray-600 mb-4">
//               <Phone className="w-5 h-5 mr-2" />
//               {selectedHospital.phone}
//             </p>
//             <div className="bg-green-100 text-green-800 rounded-lg p-3 font-medium">
//               Distance: {selectedHospital.distance}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import { useState } from "react";
import { MapPin, Search, Phone, Star, SlidersHorizontal } from "lucide-react";

export default function HospitalFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [ratingFilter, setRatingFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");

  // Dummy hospital data (frontend only)
  const hospitals = [
    {
      id: 1,
      name: "Apollo Hospitals",
      address: "Jubilee Hills, Hyderabad",
      phone: "040-2355-1234",
      rating: 4.8,
      distance: "2.5 km",
      specialty: "Cardiology",
    },
    {
      id: 2,
      name: "Fortis Healthcare",
      address: "Bannerghatta Road, Bengaluru",
      phone: "080-4567-8901",
      rating: 4.6,
      distance: "3.1 km",
      specialty: "Orthopedic",
    },
    {
      id: 3,
      name: "AIIMS Hospital",
      address: "Ansari Nagar, New Delhi",
      phone: "011-2658-8500",
      rating: 4.9,
      distance: "1.2 km",
      specialty: "Neurology",
    },
    {
      id: 4,
      name: "Rainbow Children’s Hospital",
      address: "Banjara Hills, Hyderabad",
      phone: "040-6789-4567",
      rating: 4.7,
      distance: "2.0 km",
      specialty: "Pediatrics",
    },
    {
      id: 5,
      name: "Manipal Hospital",
      address: "Old Airport Road, Bengaluru",
      phone: "080-2502-3000",
      rating: 4.5,
      distance: "4.5 km",
      specialty: "General",
    },
    {
      id: 6,
      name: "Max Super Speciality Hospital",
      address: "Saket, New Delhi",
      phone: "011-2651-2345",
      rating: 4.4,
      distance: "5.2 km",
      specialty: "Multi-specialty",
    },
  ];

  // Filter logic
  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesName = hospital.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRating =
      !ratingFilter || hospital.rating >= parseFloat(ratingFilter);

    const matchesSpecialty =
      !specialtyFilter ||
      hospital.specialty.toLowerCase() === specialtyFilter.toLowerCase();

    return matchesName && matchesRating && matchesSpecialty;
  });

  // Top 5 hospitals by rating
  const topHospitals = [...hospitals]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Hospital Finder
      </h1>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-lg shadow p-2 flex-1">
          <Search className="text-gray-400 w-5 h-5 ml-2" />
          <input
            type="text"
            placeholder="Search hospitals..."
            className="flex-1 p-2 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="text-gray-500 w-5 h-5" />

          {/* Rating Filter */}
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="p-2 rounded-lg border bg-white"
          >
            <option value="">All Ratings</option>
            <option value="4">4★ & above</option>
            <option value="3">3★ & above</option>
          </select>

          {/* Specialty Filter */}
          <select
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            className="p-2 rounded-lg border bg-white"
          >
            <option value="">All Specialties</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="General">General</option>
            <option value="Multi-specialty">Multi-specialty</option>
          </select>
        </div>
      </div>

      {/* Top Hospitals */}
      <h2 className="text-2xl font-semibold mb-3 text-gray-700">🏆 Top Hospitals</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {topHospitals.map((hospital) => (
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
          </div>
        ))}
      </div>

      {/* All Hospitals */}
      <h2 className="text-2xl font-semibold mb-3 text-gray-700">All Hospitals</h2>
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
            <div className="mt-3 text-sm text-gray-600">
              Specialty: {selectedHospital.specialty}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
