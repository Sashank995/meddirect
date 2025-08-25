// import { useState } from "react";
// import { User, Mail, Phone, MapPin, Edit3, Calendar, Shield } from "lucide-react";

// export default function MyProfile() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "Sashank Valmiki",
//     email: "sashank@example.com",
//     phone: "+91 98765 43210",
//     address: "Hyderabad, India",
//     dob: "2000-05-15",
//     bloodGroup: "B+",
//     insurance: "MediCare Plus",
//   });

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     alert("✅ Profile updated successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-green-700 mb-6">My Profile</h1>

//       {/* Profile Card */}
//       <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://i.pravatar.cc/150?img=12"
//             alt="Profile"
//             className="w-24 h-24 rounded-full border-4 border-green-200"
//           />
//           <div>
//             <h2 className="text-2xl font-bold">{profile.name}</h2>
//             <p className="text-gray-500">{profile.email}</p>
//           </div>
//         </div>

//         <hr className="my-4" />

//         {/* Editable Form */}
//         <div className="space-y-4">
//           {/* Name */}
//           <div className="flex items-center space-x-2">
//             <User className="text-green-500 w-5 h-5" />
//             <input
//               type="text"
//               name="name"
//               value={profile.name}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
//             />
//           </div>

//           {/* Email */}
//           <div className="flex items-center space-x-2">
//             <Mail className="text-green-500 w-5 h-5" />
//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
//             />
//           </div>

//           {/* Phone */}
//           <div className="flex items-center space-x-2">
//             <Phone className="text-green-500 w-5 h-5" />
//             <input
//               type="text"
//               name="phone"
//               value={profile.phone}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
//             />
//           </div>

//           {/* Address */}
//           <div className="flex items-center space-x-2">
//             <MapPin className="text-green-500 w-5 h-5" />
//             <input
//               type="text"
//               name="address"
//               value={profile.address}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
//             />
//           </div>

//           {/* DOB */}
//           <div className="flex items-center space-x-2">
//             <Calendar className="text-green-500 w-5 h-5" />
//             <input
//               type="date"
//               name="dob"
//               value={profile.dob}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
//             />
//           </div>

//           {/* Blood Group */}
//           <div className="flex items-center space-x-2">
//             <Shield className="text-green-500 w-5 h-5" />
//             <input
//               type="text"
//               name="bloodGroup"
//               value={profile.bloodGroup}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
//             />
//           </div>

//           {/* Insurance */}
//           <div className="flex items-center space-x-2">
//             <Shield className="text-green-500 w-5 h-5" />
//             <input
//               type="text"
//               name="insurance"
//               value={profile.insurance}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
//             />
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-6 flex justify-end space-x-4">
//           {isEditing ? (
//             <>
//               <button
//                 className="px-4 py-2 bg-gray-200 rounded-lg"
//                 onClick={() => setIsEditing(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
//                 onClick={handleSave}
//               >
//                 Save
//               </button>
//             </>
//           ) : (
//             <button
//               className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
//               onClick={() => setIsEditing(true)}
//             >
//               <Edit3 className="w-4 h-4" />
//               <span>Edit Profile</span>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { User, Mail, Phone, MapPin, Edit3, Calendar, Shield, FileDown, Upload, Stethoscope } from "lucide-react";

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sashank Valmiki",
    email: "sashank@example.com",
    phone: "+91 98765 43210",
    address: "Hyderabad, India",
    dob: "2000-05-15",
    bloodGroup: "B+",
    insurance: "MediCare Plus",
  });

  const [medicalHistory] = useState([
    { date: "2024-06-15", condition: "Allergy", doctor: "Dr. Rao" },
    { date: "2023-11-02", condition: "Fever", doctor: "Dr. Sharma" },
  ]);

  const [appointments] = useState([
    { date: "2025-08-20", time: "10:00 AM", doctor: "Dr. Meera", department: "Cardiology" },
    { date: "2025-09-05", time: "3:30 PM", doctor: "Dr. Arjun", department: "Dermatology" },
  ]);

  const [prescriptions] = useState([
    { name: "Vitamin D3", file: "/prescriptions/vitamin_d3.pdf" },
    { name: "Antibiotic Course", file: "/prescriptions/antibiotics.pdf" },
  ]);

  const [reports, setReports] = useState([]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  const handleReportUpload = (e) => {
    const files = Array.from(e.target.files);
    setReports((prev) => [...prev, ...files]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">My Profile Dashboard</h1>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-green-200"
          />
          <div>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-500">{profile.email}</p>
          </div>
        </div>

        <hr className="my-4" />

        {/* Editable Form */}
        <div className="space-y-4">
          {[
            { icon: User, field: "name", type: "text" },
            { icon: Mail, field: "email", type: "email" },
            { icon: Phone, field: "phone", type: "text" },
            { icon: MapPin, field: "address", type: "text" },
            { icon: Calendar, field: "dob", type: "date" },
            { icon: Shield, field: "bloodGroup", type: "text" },
            { icon: Shield, field: "insurance", type: "text" },
          ].map(({ icon: Icon, field, type }) => (
            <div className="flex items-center space-x-2" key={field}>
              <Icon className="text-green-500 w-5 h-5" />
              <input
                type={type}
                name={field}
                value={profile[field]}
                disabled={!isEditing}
                onChange={handleChange}
                className="flex-1 border-b focus:outline-none p-1 disabled:bg-transparent"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          {isEditing ? (
            <>
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={handleSave}
              >
                Save
              </button>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
              onClick={() => setIsEditing(true)}
            >
              <Edit3 className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>

      {/* Medical History */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
          <Stethoscope className="text-green-500" /> <span>Medical History</span>
        </h2>
        {medicalHistory.map((entry, idx) => (
          <div key={idx} className="border-b py-2 flex justify-between text-gray-700">
            <span>{entry.date}</span>
            <span>{entry.condition}</span>
            <span>{entry.doctor}</span>
          </div>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
        {appointments.map((appt, idx) => (
          <div key={idx} className="border-b py-2 flex justify-between text-gray-700">
            <span>{appt.date} - {appt.time}</span>
            <span>{appt.doctor}</span>
            <span>{appt.department}</span>
          </div>
        ))}
      </div>

      {/* Prescriptions */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Prescriptions</h2>
        {prescriptions.map((presc, idx) => (
          <div key={idx} className="border-b py-2 flex justify-between text-gray-700">
            <span>{presc.name}</span>
            <a
              href={presc.file}
              download
              className="text-green-600 flex items-center space-x-1"
            >
              <FileDown className="w-4 h-4" /> <span>Download</span>
            </a>
          </div>
        ))}
      </div>

      {/* Health Reports Upload */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Health Reports</h2>
        <input type="file" multiple onChange={handleReportUpload} className="mb-4" />
        <div className="space-y-2">
          {reports.map((file, idx) => (
            <div key={idx} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
              <span>{file.name}</span>
              <Upload className="text-green-500 w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

