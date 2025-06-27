import { useEffect, useState } from "react";

export default function DataViewer() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const postsPerPage = 10;

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * postsPerPage, page * postsPerPage);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 border rounded"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <ul className="grid gap-4">
          {paginated.map((post) => (
            <li key={post.id} className="p-4 bg-white shadow rounded dark:bg-gray-800 dark:text-white">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && (
        <div className="flex justify-center gap-2 pt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}