import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { request } from "../../share/request";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await request(`posts/${id}`, "get", {});
      if (res) {
        setPost(res.data_api[0]);
      } else if (res && res.id) {
        setPost(res);
      } else {
        setPost(null);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      // Simulate loading for 2 seconds to see the skeleton
      setTimeout(async () => {
        const res = await request("posts?page=1&txtsearch= ", "get", {});
        if (res && res.posts_API) {
          setLatest(res.posts_API.slice(1, 5));
        }
        setLoading(false);
      }, 1500);
    };
    fetchNews();
  }, []);
  // Helper to format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString();
  };
  if (loading) {
    return (
      <div className="w-full pb-8">
        {/* Hero Section Skeleton */}
        <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 h-80 md:h-96 flex items-center justify-center overflow-hidden bg-gray-200 animate-pulse">
          {/* Back Button Skeleton */}
          <div className="absolute top-6 left-6 z-20 bg-white/90 px-5 py-2 rounded-full shadow-lg border border-gray-200 flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-16 h-5 bg-gray-300 rounded"></div>
          </div>

          {/* Title Skeleton */}
          <div className="relative z-20 w-full flex flex-col items-center mr-10">
            <div className="mx-auto max-w-3xl w-full px-6 py-1 md:py-8 flex flex-col items-center">
              <div className="w-3/4 h-12 bg-gray-300 rounded mb-4"></div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-4 bg-gray-300 rounded"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-32 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="ml-10 mr-10 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-4">
          {/* Main Content Skeleton */}
          <div className="md:col-span-2 flex justify-center">
            <div className="prose max-w-none bg-white rounded-sm shadow-md px-12 py-2 z-10 w-full">
              <div className="space-y-4 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-40 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <aside className="sm:ml-0 md:ml-2">
            <div>
              <div className="rounded-tl-2xl rounded-br-2xl bg-gray-200 h-20 mb-2 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-white rounded-sm shadow-sm p-4 animate-pulse"
                  >
                    <div className="flex space-x-4">
                      <div className="w-1/3 h-24 bg-gray-200 rounded"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  if (!post) {
    return <div className="p-8 text-center text-gray-400">Post not found.</div>;
  }
  // Helper to truncate long titles
  const truncate = (str, n = 60) => {
    if (!str) return "";
    return str.length > n ? str.slice(0, n) + "..." : str;
  };
  // Helper to get a short preview from HTML content
  const getPreview = (html, len = 120) => {
    if (!html) return "";
    // Remove HTML tags for preview
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || "";
    return text.length > len ? text.slice(0, len) + "..." : text;
  };
  return (
    <div className="w-full pb-8  ">
      {/* Hero Section - full screen width */}
      <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 h-80 md:h-96 flex items-center justify-center overflow-hidden animate-fade-in">
        <img
          src={post.post_cover || "https://via.placeholder.com/1200x400"}
          alt={post.post_title}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Overlay for darken effect */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        {/* Back Button */}
        <a
          href="/home"
          className="absolute top-6 left-6 z-20 bg-white/90 text-gray-900 px-5 py-2 rounded-md shadow-lg border border-gray-200 flex items-center gap-2 hover:bg-gray-100 transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-semibold text-base">Home</span>
        </a>
        {/* Blurred Title Background */}
        <div className="relative z-20  w-full flex flex-col items-center mr-10">
          <div className="mx-auto max-w-3xl w-full px-6 py-1 md:py-8  flex flex-col items-center animate-slide-in-up">
            <h1 className="text-3xl sm:text-xl md:text-4xl font-extrabold text-white text-start  ">
              {post.post_title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-base text-gray-200 mt-4 text-center">
              <svg
                className="w-6 h-6 text-blue-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M12 16v-4M12 8h.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-semibold">Update:</span>
              <span className="font-medium">{post.post_by || "Unknown"}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.post_date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Two-column layout below hero */}
      <div className="ml-10 mr-10 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-4">
        {/* Main Content (left, spans 2 columns on desktop) */}
        <div className="md:col-span-2 flex justify-center">
          <div className="prose max-w-none bg-white rounded-sm shadow-md px-12  py-2 z-10 animate-fade-in-delay w-full">
            <div dangerouslySetInnerHTML={{ __html: post.post_content }} />
          </div>
        </div>
        {/* Related Content (right) */}
        <aside className="  sm:ml-0 md:ml-2 ">
          <div
          //  className="bg-white rounded-sm shadow-md p-6"
          >
            <h2 className="text-lg font-bold mb-4">Related Content</h2>
            <div className="grid grid-cols-1 gap-4">
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="animate-pulse">
                      <div className="flex space-x-4">
                        <div className="w-1/3 h-24 bg-gray-200 rounded"></div>
                        <div className="flex-1 space-y-2 py-1">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : latest.length > 0 ? (
                latest.map((news, idx) => (
                  <Link
                    to={`/post/${news.id}`}
                    key={news.id || idx}
                    className="mb-5 bg-white rounded-sm shadow-sm overflow-hidden flex flex-col hover:shadow-xl hover:ring-2 hover:ring-yellow-400 transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex grid-col-2 sm:grid-row-2">
                      <div className="relative overflow-hidden w-1/3">
                        <img
                          src={
                            news.post_cover ||
                            "https://via.placeholder.com/400x200"
                          }
                          alt={news.post_title}
                          className="w-full h-36 object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          {news.post_category || "Uncategorized"}
                        </div>
                      </div>
                      <div className="ml-4 flex-1 flex flex-col justify-between p-2">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-800 hover:text-blue-600 transition-colors duration-200 leading-tight mb-2">
                            {truncate(news.post_title, 60)}
                          </h4>
                          <div className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                            {getPreview(news.post_content, 100)}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-xs text-gray-500">
                            {formatDate(news.post_date) || "Just now"}
                          </div>
                          <div className=" text-xs font-bold text-blue-600">
                            Read more
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-4 text-center text-gray-400">
                  No latest news available.
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
