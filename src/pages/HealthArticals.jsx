// // src/pages/HealthArticles.jsx
// import React, { useEffect, useState } from "react";
// import { BookOpen, HeartPulse, Loader2 } from "lucide-react";

// // Backend base URL (read from .env, fallback to localhost if not set)
// const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "https://medirectbackend.onrender.com";

// export default function HealthArticles() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/api/health-articles`);
//         const data = await response.json();
//         setArticles(data);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArticles();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
//         <BookOpen /> Health & Wellness Articles
//       </h1>

//       {loading ? (
//         <div className="flex justify-center items-center">
//           <Loader2 className="animate-spin text-green-600" size={32} />
//           <p className="ml-2">Loading articles...</p>
//         </div>
//       ) : articles.length === 0 ? (
//         <p className="text-gray-500">No articles available.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {articles.map((article, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-semibold flex items-center gap-2 text-green-700">
//                 <HeartPulse /> {article.title}
//               </h2>
//               <p className="text-gray-600 mt-2 line-clamp-3">{article.content}</p>
//               <a
//                 href={article.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-3 inline-block text-sm text-blue-600 hover:underline"
//               >
//                 Read More →
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }








// src/pages/HealthArticles.jsx
import React, { useEffect, useState } from "react";
import { BookOpen, HeartPulse } from "lucide-react";

export default function HealthArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // Dummy frontend-only articles
  const dummyArticles = [
    {
      title: "5 Tips for a Healthy Heart ❤️",
      content: "A healthy lifestyle, balanced diet, and regular exercise can help reduce the risk of heart disease...",
      link: "#",
      category: "Heart",
    },
    {
      title: "The Importance of Mental Health 🧠",
      content: "Mental well-being is as important as physical health. Learn how to manage stress and stay mindful...",
      link: "#",
      category: "Mind",
    },
    {
      title: "Nutrition Guide for a Strong Immune System 🍎",
      content: "Boost your immunity with vitamin-rich foods, hydration, and consistent sleep habits...",
      link: "#",
      category: "Nutrition",
    },
    {
      title: "10-Minute Daily Workout 🏋️",
      content: "Short, effective workouts can improve overall fitness without taking too much time...",
      link: "#",
      category: "Fitness",
    },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setArticles(dummyArticles);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter articles by search and category
  const filteredArticles = articles.filter(
    (a) =>
      (category === "all" || a.category === category) &&
      a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <BookOpen /> Health & Wellness Articles
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="all">All Categories</option>
          <option value="Heart">Heart</option>
          <option value="Mind">Mind</option>
          <option value="Nutrition">Nutrition</option>
          <option value="Fitness">Fitness</option>
        </select>
      </div>

      {/* Articles */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 animate-pulse"
            >
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : filteredArticles.length === 0 ? (
        <p className="text-gray-500 text-center">No matching articles found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 border hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold flex items-center gap-2 text-green-700">
                <HeartPulse /> {article.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{article.content}</p>
              <a
                href={article.link}
                className="mt-3 inline-block text-sm text-blue-600 hover:underline"
              >
              </a>
              <span className="block text-xs text-gray-400 mt-2">
                Category: {article.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
