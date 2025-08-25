// src/pages/HealthArticles.jsx
import React, { useEffect, useState } from "react";
import { BookOpen, HeartPulse, Loader2 } from "lucide-react";

// Backend base URL (read from .env, fallback to localhost if not set)
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export default function HealthArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/health-articles`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-2">
        <BookOpen /> Health & Wellness Articles
      </h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <Loader2 className="animate-spin text-green-600" size={32} />
          <p className="ml-2">Loading articles...</p>
        </div>
      ) : articles.length === 0 ? (
        <p className="text-gray-500">No articles available.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold flex items-center gap-2 text-green-700">
                <HeartPulse /> {article.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{article.content}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
