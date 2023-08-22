"use client";

import { usePosts } from "@/hooks/use-posts";

export function Posts() {
  const { posts } = usePosts();

  console.log("posts::", posts);

  console.log("usePosts.invalid::", usePosts.prototype.invalid);

  return (
    <div>
      <button
        onClick={usePosts.prototype.invalid}
        className="border border-red-600"
      >
        force refetch
      </button>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
