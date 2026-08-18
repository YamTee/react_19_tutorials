import { useState, useEffect } from "react";

export const UseEffectComp = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      return response.json();
    } catch {
      console.log("there is a error");

      return [];
    }
  };

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();

      setPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Posts</h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl border border-gray-700 bg-gray-900 p-5 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white">{post.title}</h3>

            <p className="mt-2 text-gray-400">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
